import { LitElement, html, css } from 'lit';
import {getUserId, submitSurvey} from "./utils"

class MaptchaSurveyComponent extends LitElement {
  static styles = css`
    :host {
      height:100%;
      display: block;
      font-family: Arial, sans-serif;
      padding: 1rem;
      max-width: 600px;
      margin: auto;
      color:darkgrey;
      background:white;
      display:flex;
    }
    .question {
      margin-bottom: 1rem;
    }
    .question label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: bold;
    }
    .actions {
      margin-top: 2rem;
    }
    button {
      background-color: #007bff;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      cursor: pointer;
      font-size: 1rem;
      border-radius: 4px;
    }
    button:hover {
      background-color: #0056b3;
    }
    .questionLabel{
      color:black;
      font-weight:bold;
    }
    .container{
      display:flex;
      height:100%;
      flex-direction:column;
      flex:1;
    }
    .questions{
      flex:1;
      overflow-y:scroll;
    }
    textarea{
      width:100%;
    }
    .answers{
      display:flex;
      flex-direction:column;
    }
  `;

  static properties = {
    responses: { type: Object },
  };

  constructor() {
    super();
    this.responses = {
      question1: '',
      question2: '',
      question3: '',
      question4: '',
      question5: '',
      question6: '',
      question7: '',
    };
  }

  questions = [
    "I have identified features (like buildings) from satellite imagery before",
    "I could easily identify the detected building",
    "I would like more/less zoomed imagery",
    "I would benefit from more instructions",
    "I find this CAPTCHA tool very cool"
  ];

  handleInputChange(e) {
    const { name, value } = e.target;
    this.responses = { ...this.responses, [name]: value };
  }

  async handleSubmit() {
    let userId = getUserId()
    await submitSurvey(userId,this.responses)
    const event = new CustomEvent('survey-submit', {
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event)
  }

  render() {
    console.log("rendering survey");
    return html`
      <div class="container">
        <header>
          <maptcha-header> </maptcha-header>
          <h2 class="questionLabel">Survey</h2>
          <p>Thanks for trying out Maptcha. We would love to learn a little more about you to help us assess the app</p>
        </header>

        <div class='questions'>
          ${this.questions.map((q, i) => html`
            <div class="question">
              <label class="questionLabel">${q}</label>
              <div class="answers">
                ${['Strongly agree', 'Agree', 'Neutral', 'Disagree', 'Strongly disagree'].map(option => html`
                  <label>
                    <input type="radio" name="question${i + 1}" value="${option}" 
                      @change="${this.handleInputChange.bind(this)}" 
                      ?checked="${this.responses[`question${i + 1}`] === option}" />
                    ${option}
                  </label>
                `)}
              </div>
            </div>
          `)}

          <div class="question">
            <label>Is there anything we have missed and you would like to see in MapTCHA?</label>
            <textarea rows=4 name="question6" .value="${this.responses.question6}" @input="${this.handleInputChange.bind(this)}"></textarea>
          </div>

          <div class="question">
            <label>Anything you would like to suggest, feedback or comment…</label>
            <textarea rows=4 name="question7" .value="${this.responses.question7}" @input="${this.handleInputChange.bind(this)}"></textarea>
          </div>
          <button @click="${this.handleSubmit}">Submit</button>
        </div>

      </div>
    `;
  }
}

customElements.define('maptcha-survey', MaptchaSurveyComponent);
