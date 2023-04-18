import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import "../styles/responsive.css";
import("../DATA.json").then(({ default: JsonData }) => {
  let _data = JsonData["restaurants"];
  let _listdata = "";
  _data.forEach(function (dataRestoran) {
    _listdata += `
    <div class="list-item" tabindex="0">
      <div class="list-city">
        ${dataRestoran["city"]}
      </div>
      <div class="list-name">
        ${dataRestoran["name"]} | Rating : ${dataRestoran["rating"]}
      </div>
      <img class="list-thumb" src="${dataRestoran["pictureId"]}" alt="${dataRestoran["name"]}">
      <div class="list-desc">
        <p>${dataRestoran["description"]}</p>
      </div>
    </div>
    `;
  });
  document.querySelector("#list-content").innerHTML = _listdata;
});

const menu = document.querySelector("#menu");
const drawer = document.querySelector("#drawer");

menu.addEventListener("click", function (event) {
  drawer.classList.toggle("open");
  event.stopPropagation();
});
