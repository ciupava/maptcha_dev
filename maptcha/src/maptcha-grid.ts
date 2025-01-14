import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import {Image,createSubmission,getUserId, preloadImage} from "./utils"

@customElement('maptcha-grid')
class MaptchaGrid extends LitElement {

  @property({ type: Array })
  images: Image[] = []

  @property({type:Boolean})
  loading: Boolean = false

  @property({ type: Array })
  selectedIndexes: number[] = [];

  static styles = css`
    :host {
      display: block;
      font-family: Arial, sans-serif;
      color:darkgrey;
      width:100%;
      height:100%;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 5px;
      flex:1;
    }
    .grid img {
      width: 100%;
      height: auto;
      border: 2px solid transparent;
      cursor: pointer;
      border-radius: 4px;
      box-sizing:border-box;
    }
    .grid img.selected {
      border: 3px solid #491053;
    }
    .submit-btn {
      display: block;
      width: 100%;
      margin-top: 10px;
      padding: 10px;
      font-size: 1rem;
      background-color: #007BFF;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    .submit-btn:hover {
      background-color: #0056b3;
    }
    .container{
      background-color:white;
      padding:20px;
      box-sizing:border-box;
      border-radius:4px;
      display:flex;
      flex-direction:column;
      height:100%;
    }
    .loading-area{
      flex:1;
       display:flex;
       flex-direction:column;
       justify-content: center;
       align-items:center; 
    }
    .loader {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            position: relative;
            animation: rotate 1s linear infinite
          }
          .loader::before , .loader::after {
            content: "";
            box-sizing: border-box;
            position: absolute;
            inset: 0px;
            border-radius: 50%;
            border: 5px solid #FFF;
            animation: prixClipFix 2s linear infinite ;
          }
          .loader::after{
            transform: rotate3d(90, 90, 0, 180deg );
            border-color: #1a5310;
          }

          @keyframes rotate {
            0%   {transform: rotate(0deg)}
            100%   {transform: rotate(360deg)}
          }

          @keyframes prixClipFix {
              0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}
              50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}
              75%, 100%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}
          }
    }
  `;

  private toggleSelection(index: number): void {
    if (this.selectedIndexes.includes(index)) {
      this.selectedIndexes = this.selectedIndexes.filter(i => i !== index);
    } else {
      this.selectedIndexes = [...this.selectedIndexes, index];
    }
  }

  private async _recordSubmission(){
    let ids = this.images.map(i => i.image_id)
    let userId = getUserId()
    for ( let i=0; i <9; i++){
      await createSubmission(userId,this.images[i].image_id, this.selectedIndexes.includes(i), "grid", ids)        
    }
  }


  updated(changedProperties) {
    if(changedProperties.has("images")){
      let images = changedProperties.get("images");
      if(images){
        Promise.all(images.map((image)=>
          preloadImage(image.url)
        )).then(()=>{
          this.loading=false
        });
      }
    }
  }
  
  private submitCaptcha(): void {
    const event = new CustomEvent('captcha-submit', {
      detail: { count: 9 },
      bubbles: true,
      composed: true
    });

    this.loading = true

    this._recordSubmission().then(()=>{
      this.selectedIndexes=[]
      this.dispatchEvent(event);
    })
  }

  render() {
    if(this.loading){
      return html`
        <div class="container">
          <maptcha-header></maptcha-header>
          <div class="loading-area">
            <span class="loader"></span>
          </div>
        </div>
      `
    }
    return html`
      <div class="container">
        <maptcha-header></maptcha-header>
        <div class="grid">
          ${this.images.map(
            (image, index) => html`
              <img
                src="${image.url}"
                class="${this.selectedIndexes.includes(index) ? 'selected' : ''}"
                @click="${() => this.toggleSelection(index)}"
                alt="Captcha option"
              />
            `
          )}
        </div>
        <p>Click on the images where the red shape is correctly outlining a building</p>
        <button class="submit-btn" @click="${this.submitCaptcha}">Submit</button>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'maptcha-grid': MaptchaGrid;
  }
}

export default MaptchaGrid;
