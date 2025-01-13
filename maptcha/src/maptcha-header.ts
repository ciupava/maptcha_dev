import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import logo from '/maptcha_logo.webp'


@customElement('maptcha-header')
export class MaptchaHeader extends LitElement {
  static styles = css`
    .header{
      display: flex;
      flex-direction:row;
      justify-content: space-between;
      algin-items:center;
      padding:10px 0px;
      color:darkgrey;
    }
    .header img{
      width: 5rem;
    }
  `
  render(){
    return html`
        <header class="header">
          <img src=${logo} />
          <h2>Maptcha</h2>
        </header>
    `
  }
}


declare global {
  interface HTMLElementTagNameMap {
    'maptcha-header': MaptchaHeader;
  }
}

export default MaptchaHeader;
