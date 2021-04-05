'use strict';
/*------------------------------------------------------------------------------
Complete the four functions provided in the starter `index.js` file:

`fetchData`: In the `fetchData` function, make use of `fetch` and its Promise 
  syntax in order to get the data from the public API. Errors (HTTP or network 
  errors) should be logged to the console.

`fetchAndPopulatePokemons`: Use `fetchData()` to load the pokemon data from the 
  public API and populates the `<select>` element in the DOM.
  
`fetchImage`: Use `fetchData()` to fetch the selected image and update the 
  `<img>` element in the DOM.

`main`: The `main` function orchestrates the other functions. The `main` 
  function should be executed when the window has finished loading.

Try and avoid using global variables. Instead, use function parameters and 
return values to pass data back and forth.
------------------------------------------------------------------------------*/
async function fetchData(url) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  const data = await res.json();
  return data;
}

async function fetchAndPopulatePokemons() {
  const data = await fetchData('https://pokeapi.co/api/v2/pokemon?limit=151');
  data.results.forEach((element) => {
    const option = document.createElement('option');
    option.textContent = element.name;
    option.value = element.url;
    document.querySelector('select').appendChild(option);
  });
}

async function fetchImage(url) {
  const res = await fetchData(url);
  let image = document.querySelector('img');
  if (!image) {
    image = document.createElement('img');
    document.body.appendChild(image);
  }
  image.src = res.sprites.front_default;
  image.alt = res.name;
}

function main() {
  try {
    const button = document.createElement('button');
    button.textContent = 'Get Pokemon!';
    button.setAttribute('type', 'button');
    const select = document.createElement('select');
    select.style.display = 'block';
    document.body.append(button, select);

    button.addEventListener('click', () => {
      fetchAndPopulatePokemons();
    });
    select.addEventListener('change', (event) => {
      select.value = event.target.value;
      fetchImage(select.value);
    });
  } catch (error) {
    console.log(error);
  }
}
window.addEventListener('load', main);
