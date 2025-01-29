import { pokemon } from "./script.js";
const pokemonsShowBox = document.querySelector(".showPokemons");

async function fetchPokemonData(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        return data.sprites.other.dream_world.front_default;

        

    } catch (error) {
        console.log(error)
    }
};


function showPokemons() {
    pokemon.forEach(async (item) => {
        const div = document.createElement("div");
        div.classList.add("pokemons");

        const img = document.createElement("img");
        img.alt = item.name;
        img.src = await fetchPokemonData(item.url);

        const name = document.createElement("h1");
        name.textContent = item.name;

        div.append(img, name);
        pokemonsShowBox.append(div);
    });
}

showPokemons();
