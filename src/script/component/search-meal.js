class SearchMeal extends HTMLElement {

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
        .form {
            display: flex;
            background-color: white;
            padding: 1em;
            flex-wrap: nowrap;
            gap: 10px;
            margin-bottom: 1em;
            margin: 1em;
            width: 75%;
            box-shadow: 0 2px 8px 2px rgba(0, 0, 0, 0.3);
          }
          
          input[type=text] {
            border: none;
            border-bottom: 2px solid rgb(248, 137, 137);
            height: 40px;
            width: 80%;
          }
          
          button {
            background-color: #f4511e;
            border: none;
            color: white;
            padding: 12px 30px;
            text-align: center;
            font-size: 16px;
            margin: 4px 2px;
            opacity: 0.6;
            transition: 0.3s;
            text-decoration: none;
            cursor: pointer;
            width: 10%;
          }
          
          button:hover {
            opacity: 1
          }
          
        </style>
        
        <div class="form">
            <input type="text" id="inputData" />
            <button id="search">Cari</button>
        </div>
      `;
    }
}

customElements.define('search-meal', SearchMeal);
