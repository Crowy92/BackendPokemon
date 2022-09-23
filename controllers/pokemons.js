const express = require('express');
const Pokemon = require('../models/pokemon')
const router = express.Router();

router.get('/', (req, res) => {
    const pokemon = Pokemon.all
    res.send(pokemon)
})

router.get('/:id', (req, res) => {
    try {
        const pokeId = parseInt(req.params.id);
        const selectedPoke = Pokemon.findById(pokeId)
        if (!selectedPoke) {
            throw new Error('This pokemon does not exist!')
        }
        res.send(selectedPoke);
    } catch (err) {
        console.log(err);
        res.status(404).send({message: err.message})
    }
})

router.post('/', (req, res) => {
    const data = req.body;
    const newPokemon = Pokemon.create(data);
    res.status(201).send(newPokemon);
})

router.delete('/:id', (req, res) => {
    const pokeId = parseInt(req.params.id);
    const pokeToDestroy = Pokemon.findById(pokeId);
    pokeToDestroy.destroy();
    res.status(204).send();
})

module.exports = router;