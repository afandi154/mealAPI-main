class FooterElement extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        footer {
            background-color: #FF8C00;
            padding: 20px;
            color: #fff;
            text-align: center;
        }
        
        .footername a:hover {
            font-weight: bold;
        }
        </style>
        
        <footer>
            <p class="footerTittle">Belajar Membuat Front-End Web untuk Pemula &#169; 2023</p>
            <p class="footername"><a>by Della Jannata Febiana</a></p>
        </footer>
      `;
    }
}

customElements.define('footer-element', FooterElement);
