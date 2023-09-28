let index = 1;

const types = {
    normal: "#A8A77A",
    fire: "#EE8130",
    water: "#6390F0",
    electric: "#F7D02C",
    grass: "#7AC74C",
    ice: "#96D9D6",
    fighting: "#C22E28",
    poison: "#A33EA1",
    ground: "#E2BF65",
    flying: "#A98FF3",
    psychic: "#F95587",
    bug: "#A6B91A",
    rock: "#B6A136",
    ghost: "#735797",
    dragon: "#6F35FC",
    dark: "#705746",
    steel: "#B7B7CE",
    fairy: "#D685AD",
}
async function fetchData() {
    const BASE_URL = `https://pokeapi.co/api/v2/pokemon/${index}/`;
    const response = await fetch(BASE_URL);
    const data = await response.json();

    const name = data.name.charAt(0).toUpperCase() + data.name.slice(1);;
    const image = data.image;
    const height = String(data.height / 10) + "m";
    const weight = String(data.weight / 10) + "kg";
    const hp = data.stats[0].base_stat;
    const attack = data.stats[1].base_stat;
    const defense = data.stats[2].base_stat;
    const specialAttack = data.stats[3].base_stat;
    const specialDefense = data.stats[4].base_stat;
    const speed = data.stats[5].base_stat;
    const movesArray = data.moves;
    const moveNames = [];
    for (const move of movesArray) {
        moveNames.push(move.move.name);
    }
    const movesList = document.getElementById('movesList');
    movesList.innerHTML = '';
    for (const moveName of moveNames.slice(0, 10)) {
        const listItem = document.createElement('li');
        listItem.textContent = moveName.charAt(0).toUpperCase() + moveName.slice(1);
        movesList.appendChild(listItem);
    }

    const typesArray = data.types;
    const typesDisplay = document.getElementById('type-pokemon');
    typesDisplay.innerHTML = '';
    typesArray.forEach((typeData) => {
        const type = typeData.type.name;
        const typeColor = types[type] || 'gray';
        const typeElement = document.createElement('span');
        typeElement.textContent = type;
        typeElement.style.background = typeColor;
        typeElement.style.marginRight = "5px";
        typeElement.style.borderRadius = "4px";
        typeElement.style.padding = "3px";
        typeElement.style.paddingLeft = "7px";
        typeElement.style.paddingRight = "7px";
        typeElement.style.fontSize = "12px";
        typeElement.style.fontWeight = "0";
        typesDisplay.appendChild(typeElement);
        
    });

    
    document.getElementById("name-pokemon").innerHTML = `${name}`;
    document.getElementById("height").innerHTML = `Height: ${height}`;
    document.getElementById("weight").innerHTML = `Weight: ${weight}`;
    document.getElementById("hp").innerHTML = `Hitpoints: ${hp}`;
    document.getElementById("attack").innerHTML = `Attack: ${attack}`;
    document.getElementById("defense").innerHTML = `Defense: ${defense}`;
    document.getElementById("special-attack").innerHTML = `Special Attack: ${specialAttack}`;
    document.getElementById("special-defense").innerHTML = `Special Defense: ${specialDefense}`;
    document.getElementById("speed").innerHTML = `Speed: ${speed}`;
    document.getElementById('img-pokemon').src = data.sprites.front_default;
    displayInfo();
}

fetchData();

document.addEventListener('click', (event) => {
    const button = document.getElementById("decrement");
    if (event.target === button && index > 1) {
        index--;
        fetchData();
    }
});

document.addEventListener('click', (event) => {
    const button = document.getElementById("increment");
    if (event.target === button && index < 1017) {
        index++;
        fetchData();
    }
});

document.getElementById('infoButton').addEventListener('click', function() {
    displayInfo();
    
});

document.getElementById('movesButton').addEventListener('click', function() {
    displayMoves();
});

function displayInfo() {
    document.getElementById('heading-stats').textContent = 'Info';
    document.getElementById('stats').style.display = 'block';
    document.getElementById('movesList').style.display = 'none';
    document.getElementById("infoButton").style.backgroundColor = "#7CFF79";
    document.getElementById("movesButton").style.backgroundColor = "#E8E8E8";
}

function displayMoves() {
    document.getElementById('heading-stats').textContent = 'Moves';
    document.getElementById('movesList').style.display = 'block';
    document.getElementById('stats').style.display = 'none';
    document.getElementById("infoButton").style.backgroundColor = "#E8E8E8";
    document.getElementById("movesButton").style.backgroundColor = "#7CFF79";
}


