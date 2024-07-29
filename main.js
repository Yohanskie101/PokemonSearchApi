// const outputDiv = document.getElementById("output");

// function helloWorld() {
//   outputDiv.innerHTML = "<h1>Hello World</h1>";
// }

// fetch
// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// async/await
async function Pokemon() {
  try {
    const pokemoninputvalue = document
      .getElementById("pokedex")
      .value.toLowerCase();

    const results = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemoninputvalue}`
    );
    if (!results.ok) {
      throw new Error("No Pokemon you search was available!");
    }
    const pokedata = await results.json();
    const pokemongetdata = {
      name: pokedata.height,
      sprites: pokedata.sprites.front_default,
      height: pokedata.height,
    };

    const outputDiv = document.getElementById("output");

    outputDiv.innerHTML = `
      <h1>${pokemongetdata.name}</h1>
      <img src="${pokemongetdata.sprites}" alt="${pokemongetdata.name}" />
      <p>Height: ${pokemongetdata.height} decimeters</p>
    `;
    outputDiv.src = "block";
  } catch (error) {
    console.log(error);
  }
}
