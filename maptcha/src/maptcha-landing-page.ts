import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import logo from '/maptcha_logo.webp'

@customElement('maptcha-landing-page')
class MaptchaLandingPage extends LitElement {
 static styles = css`
   .landing-page{
     box-sizing:border-box;
     padding:10px 20px;
     height:100%;
     overflow-y:auto;
     display:flex;
     flex-direction:column;
   }
   header{
     display:flex;
     flex-diretion:row;
     align-items:center;
   }

   .info{
     flex:1;
     overflow-y:auto
   }
   button{
     width:100%:
     box-sizing: border-box;
     padding:20px 10px;
     background-color: #1a5310;
     color:white;
   }
 `

 _handleSubmit(){
   
    const event = new CustomEvent('start-captcha', {
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event)
 }

 render(){
   return html`
     <div class='landing-page'>
       <header>

       <img width=100 height=100  class='logo' src=${logo} />
        <div class='text'>
         <h2>Welcome to MapTCHA</h2>
         <h3>The opensource CAPTCHA that improves OpenStreetMap</h3>
         </div>
       </header>
       <div class='info'>
         <p>Bots and spam are challenges for online platforms. Traditional CAPTCHAs help block bots, but often involve improving proprietary maps and software, 
         while exposing user information to third-party CAPTCHA providers.</p>

         <p>OpenStreetMap (OSM) has many objects remaining to be mapped, but the quality of AI-generated objects is not high enough for direct inclusion.</p>
     

        <p>We introduce here “MapTCHA”, a CAPTCHA that leverages the uncertainty of interpreting imagery with computer vision, and provides human verification for AI predictions:
        you are asked to identify images containing correctly interpreted objects, e.g. building outlines.</p>
        <p>MapTCHA is still a work in progress. We are testing it now on potential users. In the following interface you will be shown what looks like a typical CAPTCHA interface, both in grid and swipe format.</p>
        <p>Please try a few identification tasks (you'll be shown 9 images per session) until you get to a short questionnaire, for us to get some feedback on the tool.</p>

        <p>We'll be presenting this project at <a href="">FOSDEM</a> soon, come along!</p>


        <p>MapTCHA is a project by Anna, Guillaume, Stuart</p>
      </div>
      <button @click="${this._handleSubmit}">Start</button>
    </div>
   `
 }
}

declare global {
  interface HTMLElementTagNameMap {
    'maptcha-landing-page': MaptchaLandingPage;
  }
}

export default MaptchaLandingPage;
