let container = document.querySelector(".container");

function getCustomer_Satellites(data) {
  let row = document.createElement("div");
  row.classList.add("row");

  data.customer_satellites.forEach((satellite) => {
    let col = document.createElement("div");
    col.classList.add("col-md-4");

    let card = `<div class="card-group mt-4">
        <div class="card">
          <img src="./customer_satellite.jpg" class="card-img-top" alt="customersatellite" height='200px' width='200px'>
          <div class="card-body">
            <h5 class="card-title text-primary">Satellite Details:</h5>
            <p class="card-text">Id: ${satellite.id}</p>
            <p class="card-text">Country: ${satellite.country}</p>
            <p class="card-text">Launch_date: ${satellite.launch_date}</p>
            <p class="card-text">Mass: ${satellite.mass}</p>
            <p class="card-text">Launcher: ${satellite.launcher}</p>
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
    let responce = await fetch(
      `https://isro.vercel.app/api/customer_satellites`
    );
    let data = await responce.json();
    getCustomer_Satellites(data);
  } catch {
    console.log("error fetching the data");
  }
}
fetchData();
