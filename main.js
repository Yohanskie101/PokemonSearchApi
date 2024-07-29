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
    //LAMAN NG INPUT BOX
    const pokemoninputvalue = document
      .getElementById("pokedex")
      .value.toLowerCase();

    const results = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemoninputvalue}`
    );
    if (!results.ok) {
      throw new Error("No Pokemon you search was available!");
    }
    //COCONVERT NETONG VARIABLE GAWING JSON TYPE YUNG DATA NA MAKUKUHA SA API
    const pokedata = await results.json();

    //OBJECT TO GET LAHAT NG DATA NEEDED
    const pokemongetdata = {
      name: pokedata.height,
      sprites: pokedata.sprites.front_default,
      height: pokedata.height,
    };

    const outputDiv = document.getElementById("output");
    //OUTPUT PARA MAPALABAS LAHAT NG NEEDED DATA
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
