const fetchAsync = async (index) => {
    const rawData = await fetch(`http://localhost:3000/pokemon/${index}`);
    const pokemonData = await rawData.json();
    console.log(pokemonData);

    const pokemonName = pokemonData.name;
    const nameHeading = document.getElementById('pokemonName');
    nameHeading.textContent = pokemonName;

    const pokeImageFront = document.getElementById('pokeImageFront');
    pokeImageFront.src = pokemonData.frontImg;

    const pokeList = document.getElementById('list');
    pokeList.innerHTML = "";
    for(let i=0; i<3; i++){
        let li = document.createElement('li');
        li.textContent = pokemonData.moves[i];
        pokeList.appendChild(li);
    }
}

let index = 1;
fetchAsync(index).catch(err => console.log(err))

const button = document.getElementById('nextPokemon');
button.addEventListener('click', () =>{
    index++;
    if (index == 5) {
        index = 1;
    }
    fetchAsync(index).catch(err => console.log(err))
})