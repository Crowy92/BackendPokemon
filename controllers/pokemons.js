const express = require('express');
const Pokemon = require('../models/pokemon')
const router = express.Router();

router.get('/', (req, res) => {
    const pokemon = Pokemon.all
    res.send(pokemon)
})

router.get('/:id', (req, res) => {
    const pokeId = parseInt(req.params.id);
    const selectedPoke = Pokemon.findById(pokeId)
    res.send(selectedPoke);
})

router.post('/', (req, res) => {
    res.status(405).send('Not Allowed yet!');
})

module.exports = router;