import { LitElement, css, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import {getImages, randomImageGrid, Image} from "./utils"
import shuffle from "lodash.shuffle"


@customElement('maptcha-testing')
class MaptchaTesting extends LitElement {

  static styles= css`
    :host{
      backgound-color:white;
      color:darkgrey;
    }
    .testing{
      display:flex;
      flex-direction:column;
      height:100vh;
      width:100vw;

      max-height:1000px;
      max-width:430px;
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
    .content{
      width:100%;
      height:100%;
      background-color:white;
    }
  `

  @state()
  showLanding: boolean = true 
   
  @state()
  imagesSeen: number = 0 

  @state()
  surveySeen: boolean = false
   
  @state()
  images: Array<Image> = []
  
  @state()
  interfaceType: String = "grid";

  async _randomImages(){
    let data = await randomImageGrid()
    return data
  }

  async connectedCallback() {
    super.connectedCallback()
    this.images= await this._randomImages();
    this.imagesSeen = JSON.parse(localStorage.getItem("images_seen")) || 0;
    this.surveySeen= JSON.parse(localStorage.getItem("surveySeen")) || false;
    let interface_type = localStorage.getItem("interface_type");
    
    if (!interface_type){
      interface_type = Math.random() < 0.5 ? "swipe" : "grid"
      localStorage.setItem("interface_type", interface_type)
    }
    this.interfaceType = interface_type
    
    console.log(this.images)
  }

  selectGrid(){
    this.selectedTab = "grid"
  }

  selectSwipe(){
    this.selectedTab = "swipe"
  }

  _updateImagesSeen(no:number){
    console.log("updating images seen ", this.imagesSeen, no)
    this.imagesSeen += no;
    localStorage.setItem("images_seen", JSON.stringify(this.imagesSeen));
  }

  _submitted(e){
    console.log("submission event",e)
    this._updateImagesSeen(e.detail.count)
    this._randomImages().then((images)=>{
      this.images = images
    });
  }

  _start(e){
    this.showLanding = false
  }

  _surveySubmitted(){
    this.surveySeen=true
    localStorage.setItem("surveySeen", true)
  }
  
  render(){
    if (this.showLanding){
      
    return html`
        <div class='testing'>
          <div class='content'>
            <maptcha-landing-page @start-captcha="${this._start}"></maptcha-landing-page>
          </div>
        </div>
    `
    }
    if (this.imagesSeen === 36 && !this.surveySeen){
      return html`
        <div class='testing'>
          <div class='content'>
            <maptcha-survey @survey-submit="${this._surveySubmitted}"> </maptcha-survey>
          </div>
        </div>
      `
    }
    return html`
     <div class="testing">
      <div class='content'>
        ${this.interfaceType=== "grid" ? 
          html`
            <maptcha-grid .images="${this.images}" @captcha-submit=${this._submitted}>
            </maptcha-grid>
          `
          :
          html`
            <maptcha-swipe .items="${this.images}" @captcha-submit=${this._submitted}>
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
