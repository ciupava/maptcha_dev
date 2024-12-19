import { LitElement, css, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import {getImages} from "./utils"
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
  images: Array<String> = []
  
  @state()
  selectedTab: String = "grid";

  _randomImages(){
    let TP = getImages("TP",3);
    let FP = getImages("FP",3);
    let TN = getImages("TN",3);

    return shuffle([...TP, ...FP,...TN]);
  }

  connectedCallback() {
    super.connectedCallback()
    console.log('connected')
    this.images= this._randomImages();
    console.log(images)
  }

  selectGrid(){
    this.selectedTab = "grid"
  }

  selectSwipe(){
    this.selectedTab = "swipe"
  }

  _submitted(){
    this.images = this._randomImages();
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
