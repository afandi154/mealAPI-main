class HeaderElement extends HTMLElement {

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
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: #FF8C00;
      }
      
      .headerTitle {
          color: white;
          font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
      }
      
      nav {
          padding: 10px;
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
          font-size: 18px;
          font-weight: 400;
          text-decoration: none;
          color: white;
          font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
      }
      
      nav a:hover {
          font-weight: bold;
      }
      </style>
      
      <header class="header">
        <h1 class="headerTitle">Foody | DJF</h1>
        <nav>
            <ul>
                <li><a href="#input">Masukkan Data</a></li>
                <li><a href="#search">Cari Data</a></li>
                <li><a href="#searchData">Daftar Data</a></li>
            </ul>
        </nav>
    </header>
    `;
  }
}

customElements.define('header-element', HeaderElement);
