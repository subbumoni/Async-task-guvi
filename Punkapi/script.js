// let container=document.querySelector('.container');

//     function getBeerDetails(data) {
//       let row = document.createElement('div');
//       row.classList.add('row');

//       for (let i = 0; i < data.length; i++) {
//         let col = document.createElement('div');
//         col.classList.add('col-md-4');
//         let card = `
//           <div class="card border-dark mb-3" style="max-width: 18rem;">
//             <div class="card-body">
//               <h5 class="card-title">Beer Details:</h5>
//               <p class="card-text">Name: ${data[i].name}</p>
//               <p class="card-text">Tagline: ${data[i].tagline}</p>
//               <p class="card-text">First_brewed: ${data[i].first_brewed}</p>
//               <p class="card-text">Attenuation_level: ${data[i].attenuation_level}</p>
//               <p class="card-text">Ingredients: ${data[i].ingredients.yeast}</p>
//               <a href="${data[i].image_url}" class="btn btn-primary" target="_blank">Click URL</a>
//             </div>
//           </div>
//         `;
//         col.innerHTML = card;
//         row.appendChild(col);
//       }

//       container.appendChild(row);
//     }

// async function fetchData(){
//     try{
//         let responce= await fetch(`https://api.punkapi.com/v2/beers`)
//         let data = await responce.json();
//         getBeerDetails(data);

//     }
//     catch{
//         console.log("error fetching the data")
//     }
//  }
// fetchData();

// let container=document.querySelector('.container');

//    function getBeerDetails(data, searchId) {
//       let row = document.createElement('div');
//       row.classList.add('row');

//       for (let i = 0; i < data.length; i++) {
//         let col = document.createElement('div');
//         col.classList.add('col-md-4');
//         if (searchId && data[i].id !== searchId) {
//           col.style.display="none"; // Hide the card if the beer ID doesn't match the search ID
//         }
//         let card = `
//           <div class="card border-dark mb-3" style="max-width: 18rem;">
//             <div class="card-body">
//               <h5 class="card-title">Beer Details:</h5>
//               <p class="card-text">Name: ${data[i].name}</p>
//               <p class="card-text">Tagline: ${data[i].tagline}</p>
//               <p class="card-text">First_brewed: ${data[i].first_brewed}</p>
//               <p class="card-text">Attenuation_level: ${data[i].attenuation_level}</p>
//               <p class="card-text">Ingredients: ${data[i].ingredients.yeast}</p>
//               <a href="${data[i].image_url}" class="btn btn-primary" target="_blank">Click URL</a>
//             </div>
//           </div>
//         `;
//         col.innerHTML = card;
//         row.appendChild(col);
//       }

//       container.appendChild(row);
//     }

// async function fetchData(){
//     try{
//         let responce= await fetch(`https://api.punkapi.com/v2/beers`)
//         let data = await responce.json();
//         const searchId = document.querySelector('#beerIdInput').value; // Get the value entered in the input field
//         const searchBtn = document.querySelector('#searchBtn');
//         searchBtn.addEventListener('click', getBeerDetails);
//     }
//     catch{
//         console.log("error fetching the data")
//     }
//  }
// fetchData();

// let cardContainer = document.querySelector('.cardContainer');

// function getBeerDetails(data, searchId) {
//   cardContainer.innerHTML = ''; // Clear the container before adding new results

//   for (let i = 0; i < data.length; i++) {
//     if (searchId && data[i].id.toString() !== searchId) {
//       continue; // Skip to the next iteration if the beer ID doesn't match the search ID
//     }

//     let col = document.createElement('div');
//     col.classList.add('col-md-4');
//     let card = `
//       <div class="card border-dark m-3" style="max-width: 18rem;">
//         <div class="card-body">
//           <h5 class="card-title">Beer Details:</h5>
//           <img src="${data[i].image_url}" class="card-img-top" alt="customersatellite" height='500px' width='200px'>
//           <p class="card-text mt-3">Name: ${data[i].name}</p>
//           <p class="card-text">Tagline: ${data[i].tagline}</p>
//           <p class="card-text">First_brewed: ${data[i].first_brewed}</p>
//           <p class="card-text">Attenuation_level: ${data[i].attenuation_level}</p>
//           <p class="card-text">Ingredients: ${data[i].ingredients.yeast}</p>
//           <a href="${data[i].image_url}" class="btn btn-primary" target="_blank">Click URL</a>
//         </div>
//       </div>
//     `;
//     col.innerHTML = card;
//     cardContainer.appendChild(col);
//   }

// }

// async function fetchData() {
//   try {
//     let response = await fetch('https://api.punkapi.com/v2/beers');
//     let data = await response.json();
//     const searchId = document.querySelector('.beerIdInput').value; // Get the value entered in the input field
//     getBeerDetails(data, searchId);
//   } catch {
//     console.log('Error fetching the data');
//   }
// }

// const searchBtn = document.querySelector('#searchBtn');
// searchBtn.addEventListener('click', fetchData);

const cardContainer = document.querySelector(".card-container");

function getBeerDetails(data, searchId) {
  cardContainer.innerHTML = ""; // Clear the container before adding new results

  for (let i = 0; i < data.length; i++) {
    if (searchId && data[i].id.toString() !== searchId) {
      continue; // Skip to the next iteration if the beer ID doesn't match the search ID
    }

    let col = document.createElement("div");
    col.classList.add("col-md-4");
    let card = `
      <div class="card border-dark m-3" style="max-width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Beer Details:</h5>
          <img src="${data[i].image_url}" class="card-img-top" alt="customersatellite" height='500px' width='200px'>
          <p class="card-text mt-3">Name: ${data[i].name}</p>
          <p class="card-text">Tagline: ${data[i].tagline}</p>
          <p class="card-text">First_brewed: ${data[i].first_brewed}</p>
          <p class="card-text">Attenuation_level: ${data[i].attenuation_level}</p>
          <p class="card-text">Ingredients: ${data[i].ingredients.yeast}</p>
          <a href="${data[i].image_url}" class="btn btn-primary" target="_blank">Click URL</a>
        </div>
      </div>
    `;
    col.innerHTML = card;
    cardContainer.appendChild(col);
  }
}

async function fetchData() {
  try {
    let response = await fetch("https://api.punkapi.com/v2/beers");
    let data = await response.json();
    const searchId = document.querySelector("#beerIdInput").value; // Get the value entered in the input field
    getBeerDetails(data, searchId);
  } catch {
    console.log("Error fetching the data");
  }
}

const searchBtn = document.querySelector("#searchBtn");
searchBtn.addEventListener("click", fetchData);
