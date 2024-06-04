let container = document.querySelector(".container");

function getCitybikeData(data) {
  let row = document.createElement("div");
  row.classList.add("row");

  data.networks.forEach((networks) => {
    let col = document.createElement("div");
    col.classList.add("col-md-4");

    let card = `<div class="card-group mt-4">
        <div class="card">
          <img src="./citybike.jpg" class="card-img-top" alt="Citybike_image" height='200px' width='200px'>
          <div class="card-body">
            <h5 class="card-title text-primary">CityBikes Details:</h5>
            <p class="card-text">Name: ${networks.name}</p>
            <p class="card-text">Id: ${networks.id}</p>
            <p class="card-text">Company: ${networks.company}</p>
            <p class="card-text">City: ${networks.location.city}</p>
         
          </div>
        </div>
       
      </div>`;

    col.innerHTML = card;
    row.appendChild(col);
  });

  container.appendChild(row);
}

async function fetchData() {
  try {
    let responce = await fetch(`https://api.citybik.es/v2/networks`);
    let data = await responce.json();
    getCitybikeData(data);
  } catch {
    console.log("error fetching the data");
  }
}
fetchData();
