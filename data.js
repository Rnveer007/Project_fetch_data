import { pokemon } from "./script.js";
const pokemonsShowBox = document.querySelector(".showPokemons");
const typeFilter = document.querySelector("#typeFilter"); // Select dropdown

async function fetchPokemonData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return {
            image: data.sprites.other.dream_world.front_default,
            types: data.types.map(typeInfo => typeInfo.type.name)
        };
    } catch (error) {
        console.log(error);
    }
}

async function showPokemons() {
    pokemon.forEach(async (item) => {
        const div = document.createElement("div");
        div.classList.add("pokemons");

        const img = document.createElement("img");
        img.alt = item.name;

        const name = document.createElement("h1");
        name.textContent = item.name;

        const { image, types } = await fetchPokemonData(item.url);
        img.src = image;

        const typePara = document.createElement("p");
        typePara.textContent = ` ${types.join(", ")}`;


        types.forEach(type => {
            const option = document.createElement("option");
            option.value = type;
            option.innerHTML = type;
            typeFilter.appendChild(option);
        });

        div.append(img, name, typePara);
        pokemonsShowBox.append(div);
    });
}


showPokemons();


function filterPokemonsByTypes () {
    
}
