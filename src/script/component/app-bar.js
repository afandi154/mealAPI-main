class AppBar extends HTMLElement {
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
      * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      }
      
      header {
          padding-top: 20px;
          padding-bottom: 10px;
          padding-left:20px;
          display: flex;
          flex-direction: row;
          align-items: center;
      }
      
      .headerTitle {
          color: #FF8C00;
          font-family: 'Cursive';
      }
      
      nav {
          position: sticky;
          top: 0;
      }
      
      nav li {
          list-style-type: none;
          margin-right: 20px;
      }
      
      nav ul {
          padding-inline: 4rem;
          display: flex;
          gap: 2rem;
      }
      
      nav a {
          font-size: 20px;
          text-decoration: none;
          color: #FF8C00;
          font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
      }
      
      nav a:hover {
          font-weight: bold;
      }
      @media screen and (max-width: 1200px){
        header {
          flex-direction: column;
      }
    }
      @media screen and (max-width: 768px) {
        header {
          flex-direction: column;
      }
    }
      </style>
      
      <header class="header">
        <h1 class="headerTitle">Foody | DJF</h1>
        <nav>
            <ul>
                <li><a href="#detail-content"">Beranda</a></li>
                <li><a href="#inputData">Cari Menu</a></li>
            </ul>
        </nav>
    </header>
    `;
    }
}

customElements.define('app-bar', AppBar);
