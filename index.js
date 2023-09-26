let index = 1;

async function fetchData() {
    const BASE_URL = `https://pokeapi.co/api/v2/pokemon/${index}/`;
    const response = await fetch(BASE_URL); //fetching info from URL
    const data = await response.json(); //converting to json
    const name = data.name;
    console.log(response);

    const nameDiv = document.getElementById("name");
    const nameHTML = `
    <p>Name: ${name}</p>
    `;
    nameDiv.innerHTML = nameHTML;
}

document.addEventListener('click', () => {
    fetchData();
    index++;
});