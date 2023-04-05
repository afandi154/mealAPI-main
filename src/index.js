import axios from "axios";
import "./styles/style.css";
import './script/component/header-element.js';
import './script/component/footer-element.js';

const config = {
  headers: {
    Accept: "application/json",
  },
};

function component() {
  const inputData = document.getElementById("inputData");
  const btnSearch = document.getElementById("search");
  const listElement = document.getElementById("list");

  btnSearch.addEventListener("click", async () => {
    listElement.innerHTML = "";

    await axios
      .get(
        `https://themealdb.com/api/json/v1/1/search.php?f=${inputData.value}`,
        config
      )
      .then((res) => {
        res.data?.meals?.forEach((data) => {
          const card = document.createElement("div");

          card.innerHTML = `
            <div class="card">
              <img src="${data.strMealThumb}" alt="img-${data.idMeal
            }" width="200" height="200" />
              <div id=${Number(data.idMeal)} class="wrapper">
                <h2>${data.strMeal}</h2>
                <span>${data.strCategory}</span>
                <button onclick="addShowDetail(e)">Klik Aku</button>
              </div>
            </div>
          `;
          card.addEventListener("click", (e) => addShowDetail(e));
          listElement.appendChild(card);
        });
      });
  });
}

async function addShowDetail(e) {
  const elementID = e.target.id;
  const overlay = document.createElement("div");
  overlay.setAttribute("class", "overlay");

  await axios
    .get(
      `https://themealdb.com/api/json/v1/1//lookup.php?i=${elementID}`,
      config
    )
    .then((res) => {
      const data = res.data.meals[0];
      overlay.innerHTML = `
      <div class="modal"
        <h2>${data.strMeal}</h2>
        <span>${data.strArea} ${data.strCategory}</span>

        <p style="margin: 1em 0">${data.strInstructions}</p>
      </div>
      `;

      document.body.appendChild(overlay);
    });
}

component();
