import { LitElement, css, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import {getImages, randomImageGrid, Image} from "./utils"
import shuffle from "lodash.shuffle"


@customElement('maptcha-testing')
class MaptchaTesting extends LitElement {

  static styles= css`
    .testing{
      display:flex;
      flex-direction:column;
    }

    .tabs{
      display:flex;
      flex-direction:row;
      
    }
    .tabs button{
      flex:1;
      background-color: white;
      color: black;
      border: 1px solid darkgray;
      padding: 10px;
      cursor:pointer;
    }
    .tabs button.selected{
      background-color: #1a5310;
      color:white;

    }
  `

  @state()
  images: Array<Image> = []
  
  @state()
  selectedTab: String = "grid";

  async _randomImages(){
    let data = await randomImageGrid()
    return data
  }

  async connectedCallback() {
    super.connectedCallback()
    this.images= await this._randomImages();
    console.log(this.images)
  }

  selectGrid(){
    this.selectedTab = "grid"
  }

  selectSwipe(){
    this.selectedTab = "swipe"
  }

  _submitted(){
    this._randomImages().then((images)=>{
      this.images = images
    });
  }
  
  render(){
    return html`
     <div class="testing">
      <div class='tabs'>
         <button class=${this.selectedTab === "grid" ? "selected" : ""} @click="${this.selectGrid}">Grid</button>
         <button class=${this.selectedTab === "swipe" ? "selected" : ""} @click="${this.selectSwipe}">Swipe</button>
      </div>

      <div class='content'>
        ${this.selectedTab === "grid" ? 
          html`
            <maptcha-grid .images="${this.images}" @captcha-submit=${this._submitted}>
            </maptcha-grid>
          `
          :
          html`
            <maptcha-swipe .items="${this.images}">
            </maptcha-swipe>
          `
        }

      </div>
     </div> 
    `
  }
}

export default MaptchaTesting;

declare global {
  interface HTMLElementTagNameMap {
    'maptcha-testing': MaptchaTesting;
  }
}
