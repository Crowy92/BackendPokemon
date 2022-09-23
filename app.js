const express = require('express');
const pokeRoutes = require('./controllers/pokemons')
const app = express()
let cors = require("cors")
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello Gustaf!')
})

app.use('/pokemon', pokeRoutes)

module.exports = app;
