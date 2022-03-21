// Aqui lo que hacemos es declarar nueastras 
// variables con cada una de nuestros id en las etiquetas 'data' del documento html
const pokeCard = document.querySelector('[data-poke-card]');
const pokeName = document.querySelector('[data-poke-name]');
const pokeImgContainer = document.querySelector('[data-poke-img-container]');
const pokeImg = document.querySelector('[data-poke-img]');
const pokeId = document.querySelector('[data-poke-id]');
const pokeTypes = document.querySelector('[data-poke-types]');
const pokeStats = document.querySelector('[data-poke-stats]');
const pokeHeight = document.querySelector('[data-poke-height]');
const pokeWeight = document.querySelector('[data-poke-weight]');

// Creamos un diccionario para poder asignar un color dependiendo el tipo de pokemon
// ej. pikachu: electric => '#FFEA70'(yellow)
const typeColors = {
    electric: '#FFEA70',
    normal: '#B09398',
    fire: '#FF675C',
    water: '#0596C7',
    ice: '#AFEAFD',
    rock: '#999799',
    flying: '#7AE7C7',
    grass: '#4A9681',
    psychic: '#FFC6D9',
    ghost: '#561D25',
    bug: '#A2FAA3',
    poison: '#795663',
    ground: '#D2B074',
    dragon: '#DA627D',
    steel: '#1D8A99',
    fighting: '#2F2F2F',
    default: '#2A1A1F',
};


const searchPokemon = event =>{
    event.preventDefault(); // ---> Cancelamos el submit automatico del form 
    const { value } = event.target.pokeName; // ---> Obtenemos el valor del input
    fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`) // ---> Hacemos la consulta a la API de manera asincrona y encontrar nuestro pokemon
        .then(data => data.json())
        .then(response => renderPokemonData(response))
        .catch(err => renderNotFound())
}

// Procesamos el Json para poder obtener toda la informacion en este caso: nombre, img, id, altura, peso
const renderPokemonData = data => {
    const sprite = data.sprites.front_default;
    const {height, weight, stats, types } = data;
    
    pokeName.textContent = data.name;
    pokeImg.setAttribute('src', sprite);
    setCardColor(types);        // ---> funcion para renderizar el fondo
    pokeId.textContent = `No. ${data.id}`;
    renderPokemonTypes(types);  // ---> funcion para obtener el tipo(s)
    renderPokemonStats(stats);  // ---> funcion para obtener las estadisticas
    pokeHeight.textContent = `Altura: ${data.height}m`;
    pokeWeight.textContent = `Peso: ${data.weight}kg`;
    // console.log(data);
    
    
}

// Aqui lo que hacemos es hacer el fondo de nuestro pokemon y escojer el color primario y secundario
const setCardColor = types =>{
    const colorOne = typeColors[types[0].type.name];
    const colorTwo = types[1] ? typeColors[types[1].type.name] : typeColors.default;
    pokeImg.style.background = `radial-gradient(${colorTwo} 33%, ${colorOne} 33%)`;
    pokeImg.style.backgroundSize = ' 5px 5px';
}


const renderPokemonTypes = types =>{
    pokeTypes.innerHTML='';
    types.forEach(type => {
        const typeTextElement = document.createElement("div");
        typeTextElement.style.color = typeColors[type.type.name];
        typeTextElement.textContent = type.type.name;
        pokeTypes.appendChild(typeTextElement);
    })
}

const renderPokemonStats  = stats =>{
    pokeStats.innerHTML='';
    stats.forEach(stat => {
        const statElement = document.createElement("div");
        const statElementName = document.createElement("div");
        const statElementAmount = document.createElement("div");
        statElementName.textContent = stat.stat.name;
        statElementAmount.textContent = stat.base_stat;
        statElement.append(statElementName);
        statElement.append(statElementAmount);
        pokeStats.appendChild(statElement);
    });
}

const renderNotFound = () =>{
    pokeName.textContent = 'Pokemon no encontrado';
    pokeImg.setAttribute('src', 'sad-pikachu.gif');
    pokeImg.style.background = '#fff';
    pokeTypes.innerHTML = '';
    pokeStats.innerHTML = '';
    pokeId.textContent = '';
    pokeHeight.textContent = '';
    pokeWeight.textContent = '';
}