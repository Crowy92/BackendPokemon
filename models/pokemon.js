const pokemonData = require('../data');

class Pokemon {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.frontImg = data.frontImg;
        this.moves = data.moves;
    }

    static get all() {
        const pokes = pokemonData.map((poke) => new Pokemon(poke))
        return pokes;
    }

    static findById(id){
        console.log("**************pokemon.js - model****************");
        console.log(id);
        const pokeData = pokemonData.filter((poke) => poke.id == id)[0];
        if (!pokeData){
            return;
        }
        const poke = new Pokemon(pokeData);
        return poke;
    }

    static create(poke) {
        const newPokeId = pokemonData.length + 1;
        const newPoke = new Pokemon({ id: newPokeId, ...poke});
        pokemonData.push(newPoke);
        return newPoke;
    }

    destroy() {
        const poke = pokemonData.filter((poke) => poke.id === this.id)[0];
        pokemonData.splice(pokemonData.indexOf(poke), 1)
    }
}

module.exports = Pokemon;