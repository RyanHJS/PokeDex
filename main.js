const poke_container = document.getElementById("poke_container");

// Max number of pokemons = 898 (Calyrex)
const pokemons_number = 898;

const fetchPokemons = async () => {
  try {
    for (let i = 1; i <= pokemons_number; i++) {
      await getPokemon(i);
    }
  } catch (err) {
    console.log(err);
  }
};

const getPokemon = async (id) => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const results = await fetch(url);
    const pokemon = await results.json();
    createPokemonCard(pokemon);
  } catch (err) {
    console.log(err);
  }
};

const createPokemonCard = (pokemon) => {
  const pokemonEl = document.createElement("div");
  pokemonEl.classList.add("pokemon");
  const { id, name, sprites, types } = pokemon;
  const type = types[0].type.name;
  const pokeInnerHTML = `
  <div class="img-container">
    <img src="${sprites.front_default}" alt="${name}" />
  </div>
  <div class="info">
    <span class="number">${id}</span>
    <h3 class="name">${name}</h3>
    <small class="type">Type: <span>${type}</span></small>
  </div>
  `;

  pokemonEl.innerHTML = pokeInnerHTML;
  poke_container.appendChild(pokemonEl);
};

fetchPokemons();
