import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
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
  items: Image[] = [];

  private _currentIndex = 0;
  private _startX = 0;
  private _currentX = 0;
  private _isDragging = false;



  render() {
    return html`
      <div class="container">
      <maptcha-header></maptcha-header>
      <div class="swipe-area">
        ${this.items.length > this._currentIndex
          ? html`
              <div
                class="card"
                @pointerdown=${this._onPointerDown}
                @pointermove=${this._onPointerMove}
                @pointerup=${this._onPointerUp}
                style=${this._getTransformStyle()}
              >
                <img src=${this.items[this._currentIndex].url} />
              </div>

            `
          : html`<p>No more items!</p>`}
        </div>
        <p>Swipe right if the red outline covers the building</p>
        <div class='buttons'>
          <button @click=${this._clickAgree} class="disagree">Disagree</button>
          <button @click=${this._clickDisagree} class="agree">Agree</button>
        </div>
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
    let imageId = this.items[this._currentIndex].image_id 
    await createSubmission(userId, imageId,response , "swipe", [])
  }

  private _clickAgree(){
    this._recordResponse(true).then(()=>{
      this._currentIndex++;
      this.requestUpdate();
    })
  }

  private _clickDisagree(){
    this._recordResponse(false).then(()=>{
      this._currentIndex++;
      this.requestUpdate();
    })
  }

  private _swipe(direction: 'left' | 'right') {
    const card = this.shadowRoot?.querySelector('.card');
    if (card) {
      card.style.transform = `translateX(${direction === 'right' ? '100%' : '-100%'})`;
    }
    setTimeout(() => {
      this._currentIndex++;
      this.requestUpdate();
    }, 300);
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
