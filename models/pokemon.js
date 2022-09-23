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
        const pokeData = pokemonData.filter((poke) => poke.id == id)[0];
        const poke = new Pokemon(pokeData);
        return poke;
    }
}

module.exports = Pokemon;