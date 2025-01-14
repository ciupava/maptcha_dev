import { LitElement, css, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import {Image, getUserId, createSubmission} from "./utils"


@customElement('maptcha-swipe')
export class MaptchaSwipe extends LitElement {
  static styles = css`
    :host {
      display: block;
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
      background-color:white;
      box-sizing:border-box;
      padding:20px;
      font-family: Arial, sans-serif;
      color:darkgrey;
      width:100%;      
      height:100%;
    }
    .container{
      display:flex;
      flex-direction:column;
      width:100%;      
      height:100%;
    }
    .swipe-area{
      flex:1;
      display:flex;
      flex-direction:column;
      justify-content: center;
      align-items:center;
    }
    .card {
      position: absolute;
      width: 90%;
      max-width: 400px;
      height:300px;
      background-color: #fff;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-size: 24px;
      cursor: grab;
      user-select: none;
      color:grey;
      transition: transform 0.3s ease-in-out;
      touch-action:none;
    }
    .card.dragging {
      transition: none;
    }
    .card img{
      width: 300px
    } 
    button{
      padding:10px 20px;
      box-sizing:border-box;
      color:white;
      border-radius: 10px;
      border:0px;
      font-weight:bold;
      width:40%;
      cursor:pointer;
    }
    .agree{
      background-color:green
    }
    .disagree{
      background-color:red
    }
    .buttons{
      display:flex;
      flex-direction:row;
      justify-content:space-between;
    }
  `;

  @property({ type: Array })
  images: Image[] = [];

  @state()
  imageQueue: Image[] = [];

  @state()
  currentImage: Image = null;
  

  private _currentIndex = 0;
  private _startX = 0;
  private _currentX = 0;
  private _isDragging = false;


  private populateQueue(images: Array<Image>){
    images.forEach((image)=>{
      if(!this.imageQueue.includes(image)){
        this.imageQueue.push(image)
      }
    })
    if(!this.currentImage){
      this.currentImage = this.imageQueue.pop()
    }
    this.requestUpdate()
  }

  connectedCallback() {
    super.connectedCallback()
    this.populateQueue(this.images)
  }

  updated(changedProperties) {
    if(changedProperties.has("images")){
      let images = changedProperties.get("images");
      if(images){
        this.populateQueue(images)
      }
    }
  }


  render() {
    return html`
      <div class="container">
      <maptcha-header></maptcha-header>
      ${this.currentImage  ? 
        html`
        <div class="swipe-area">
              <div
                class="card"
                @pointerdown=${this._onPointerDown}
                @pointermove=${this._onPointerMove}
                @pointerup=${this._onPointerUp}
                style=${this._getTransformStyle()}
              >
                <img src=${this.currentImage.url} />
              </div>
          </div>
          <p>Swipe right if the red shape is correctly outlining a building. If not swipe left</p>
          <div class='buttons'>
            <button @click=${this._clickAgree} class="disagree">Incorrect</button>
            <button @click=${this._clickDisagree} class="agree">Correct</button>
          </div>
        `

        : 
        html`
          <h1>Loading</h1>
        `
      }
      </div>
    `;
  }

  private _onPointerDown(event: PointerEvent) {
    this._startX = event.clientX;
    this._currentX = this._startX;
    this._isDragging = true;
    const card = this.shadowRoot?.querySelector('.card');
    card?.classList.add('dragging');
    event.preventDefault();
  }

  private _onPointerMove(event: PointerEvent) {
    if (!this._isDragging) return;
    this._currentX = event.clientX;
    this.requestUpdate();
  }

  private _onPointerUp(event: PointerEvent) {
    if (!this._isDragging) return;
    this._isDragging = false;

    const deltaX = this._currentX - this._startX;
    const threshold = this.offsetWidth / 4;

    const card = this.shadowRoot?.querySelector('.card');
    if (card) {
      card.classList.remove('dragging');
    }

    if (deltaX > threshold) {
      this._recordResponse(true).then(()=>{
        this._swipe('right');
      });
    } else if (deltaX < -threshold) {
      this._recordResponse(false).then(()=>{
        this._swipe('left');
      });
    } else {
      this._resetPosition();
    }
  }


  private async _recordResponse(response:bool){
    let userId = getUserId()
    let imageId = this.currentImage.image_id 

    await createSubmission(userId, imageId,response , "swipe", [])
    if(this.imageQueue.length < 3){
      const event = new CustomEvent('captcha-submit', {
        detail:{count: 7},
        bubbles: true,
        composed: true
      });
      this.dispatchEvent(event);
    }

    this.currentImage = this.imageQueue.pop();

    setTimeout(()=>{
      this.requestUpdate();      
    },300)
  }

  private _clickAgree(){
    this._recordResponse(true)
  }

  private _clickDisagree(){
    this._recordResponse(false)
  }

  private _swipe(direction: 'left' | 'right') {
    const card = this.shadowRoot?.querySelector('.card');
    if (card) {
      card.style.transform = `translateX(${direction === 'right' ? '100%' : '-100%'})`;
    }
    setTimeout(()=>{
      card.style.transform = `translateX(0px)`;
    },300)
  }

  private _resetPosition() {
    this._currentX = 0;
    this.requestUpdate();
  }

  private _getTransformStyle() {
    if (!this._isDragging) return '';
    const deltaX = this._currentX - this._startX;
    const rotation = deltaX / 20;
    return `transform: translateX(${deltaX}px) rotate(${rotation}deg);`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'maptcha-swipe': MaptchaSwipe;
  }
}
