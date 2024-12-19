import { LitElement, css, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'

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
  selectedTab: String = "grid";

  selectGrid(){
    this.selectedTab = "grid"
  }

  selectSwipe(){
    this.selectedTab = "swipe"
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
            <maptcha-grid>
            </maptcha-grid>
          `
          :
          html`
            <maptcha-swipe>
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
