import fastfood from "../assets/img/fastfood.png";

class ContentAwal extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
          <style>
          .detail-content {
              display: flex;
              flex-direction: row;
              background-color: #fabb93;
              padding:1em;
              align-content:center;
              height:350px;
          }
          .content-description{
              text-align: justify;
              padding-right: 20px;
              padding-left: 20px;
              padding-bottom: 20px;
          }
          h1 {
              color: #FF8303;
          }
          button {
              padding: .6rem 2rem;
              margin-block-start: 1rem;
              text-transform: uppercase;
              font-weight: 500;
              font-size: 1rem;
              font-family: 'Quicksand', sans-serif;
              color: white;
              border: 2px solid transparent;
              border-radius: 999px;
              background-color: #FF8303;
              cursor: pointer;
              transition: all .15s ease-in;
          }
          @media screen and (max-width: 1000px){
            content-description {
              display: none;
            }
          }
          </style>

        <div class="detail-content" id="detail-content">
        <div class="content-image">
          <img src='${fastfood}' alt="Fast Food">
        </div>
          <div class="content-description">
            <h1 class="title-content">Welcome to Foody</h1>
            <p>Jajan Dulu adalah pusat informasi makanan cepat saji. Kami memiliki penjelasan
              aneka macam makanan cepat saji dan resep pembuatannya.</p>
            <button>Selengkapnya</button>
          </div>
      </div>
        `;
  }
}

customElements.define("content-awal", ContentAwal);
