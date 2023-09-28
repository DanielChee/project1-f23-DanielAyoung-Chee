let index = 1;

async function fetchData() {
    const BASE_URL = `https://pokeapi.co/api/v2/pokemon/${index}/`;
    const response = await fetch(BASE_URL); //fetching info from URL
    const data = await response.json(); //converting to json

    const name = data.name;
    const image = data.image;
    const height = data.height;
    const weight = data.weight;
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

    // Populate the move list
    for (const moveName of moveNames) {
        const listItem = document.createElement('li');
        listItem.textContent = moveName;
        movesList.appendChild(listItem);
    }

    
    document.getElementById("name-pokemon").innerHTML = `${name}`;
    document.getElementById("height").innerHTML = `${height}`;
    document.getElementById("weight").innerHTML = `${weight}`;
    document.getElementById("hp").innerHTML = `${hp}`;
    document.getElementById("attack").innerHTML = `${attack}`;
    document.getElementById("defense").innerHTML = `${defense}`;
    document.getElementById("special-attack").innerHTML = `${specialAttack}`;
    document.getElementById("special-defense").innerHTML = `${specialDefense}`;
    document.getElementById("speed").innerHTML = `${speed}`;
    document.getElementById('img-pokemon').src = data.sprites.front_default;
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
    // Set the mode to "Info"
    displayInfo();
});

document.getElementById('movesButton').addEventListener('click', function() {
    // Set the mode to "Moves"
    displayMoves();
});

function displayInfo() {

    document.getElementById('stats').style.display = 'block';
    document.getElementById('movesList').style.display = 'none';
}

function displayMoves() {

    document.getElementById('movesList').style.display = 'block';
    document.getElementById('stats').style.display = 'none';
}


