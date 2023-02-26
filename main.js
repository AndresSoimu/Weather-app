const apiKey = "0b97edb45004482bbd672641232602";
const header = document.querySelector("#header");
/* const header = document.querySelector(".header"); */
const form = document.querySelector("#form");
const input = document.querySelector("#inputCiti");

form.onsubmit = function (e) {
  e.preventDefault();

  let city = input.value.trim();

  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  fetch(url)
    .then((response) => response.json())

    .then((data) => {
      if (data.error) {
        const prevCard = document.querySelector(".card");
        if (prevCard) prevCard.remove();
        const html = '<div class="card">Intenta de nuevo </div>'
        header.insertAdjacentHTML("afterend", html)

      } else {
        
        console.log(data.current.condition.code);

        const prevCard = document.querySelector(".card");
        if (prevCard) prevCard.remove();

        const htmle = ` <div class="card">
    <h2 class="card-city">${data.location.name} <span>${data.location.country}</span></h2>

    <div class="card-weather">
      <div class="card-value">${data.current.temp_c}<sup>°c</sup></div>
      <img class="card-img" src='${data.current.condition.icon}' alt="Weather" />
    </div>

    <div class="card-description">${data.current.condition.text}</div>
  </div>`;

        header.insertAdjacentHTML("afterend", htmle);
      }
    });
    
};


