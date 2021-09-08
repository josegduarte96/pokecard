const urlPokeAPI = 'https://pokeapi.co/api/v2/pokemon';
const divPerfil = document.querySelector('.perfil');

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


export const cargarPokemon = async() => {

    //fetc-data
    const resp = await fetch(`${urlPokeAPI}/${getRandomInt(1,150)}`);
    const data = await resp.json();

    //nombre pokemon
    let namePoke = data.name;
    //foto de pokemon
    let fotoPoke = data.sprites.other.dream_world.front_default;
    //Experiencia de pokemon
    let expPoke = data.base_experience;
    let attack = data.stats[1].base_stat;
    let special = data.stats[3].base_stat;
    let defense = data.stats[2].base_stat;
    

    let tarjetaPokeHTML = `
                <img src="${fotoPoke}" class="foto-perfil" alt="foto perfil">
                <h2 class="nombre-perfil">${namePoke}</h2>
                <p class="experiencePoke">${expPoke}xp</p>
                <div class="habilidades">
                <p class="attack">Ataque</p>
                <p class="special-attack">Ataque Especial</p>
                <p class="defense">Defensa</p>                     
                <h3 class="n-attack">${attack}</h3>
                <h3 class="n-special">${special}</h3>
                <h3 class="n-defense">${defense}</h3>`;
    divPerfil.innerHTML = tarjetaPokeHTML


}

export const init = () => {
    cargarPokemon();
    
}
