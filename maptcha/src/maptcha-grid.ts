import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'


@customElement('maptcha-grid')
class MaptchaGrid extends LitElement {
  @property({ type: Array })
  images: string[] = [
    // Placeholder URLs; replace with actual URLs.
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150'
  ];

  @property({ type: Array })
  selectedIndexes: number[] = [];

  static styles = css`
    :host {
      display: block;
      max-width: 400px;
      margin: 0 auto;
      font-family: Arial, sans-serif;
      color:darkgrey;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 5px;
    }
    .grid img {
      width: 100%;
      height: auto;
      border: 2px solid transparent;
      cursor: pointer;
      border-radius: 4px;
    }
    .grid img.selected {
      border-color: #007BFF;
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
      border-radius:4px;
      display:flex;
      flex-direction:column;
    }
  `;

  private toggleSelection(index: number): void {
    if (this.selectedIndexes.includes(index)) {
      this.selectedIndexes = this.selectedIndexes.filter(i => i !== index);
    } else {
      this.selectedIndexes = [...this.selectedIndexes, index];
    }
  }

  private submitCaptcha(): void {
    const event = new CustomEvent('captcha-submit', {
      detail: { selectedIndexes: this.selectedIndexes },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  }

  render() {
    return html`
      <div class="container">
        <maptcha-header></maptcha-header>
        <div class="grid">
          ${this.images.map(
            (image, index) => html`
              <img
                src="${image}"
                class="${this.selectedIndexes.includes(index) ? 'selected' : ''}"
                @click="${() => this.toggleSelection(index)}"
                alt="Captcha option"
              />
            `
          )}
        </div>
        <p>Click all of the images where the red outline covers the buildings</p>
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
