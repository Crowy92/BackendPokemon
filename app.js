const express = require('express')
const app = express()
const port = 3000
let cors = require("cors")
app.use(cors());

const pokemon = [
    { id: 1, 
      name: 'Bulbasaur', 
      frontImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png", 
      moves: ["vine whip", "razor leaf", "tackle"] 
    },
    { id: 2, 
        name: 'Charmander', 
        frontImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png", 
        moves: ["ember", "scratch", "leer"] 
    },
    { id: 3, 
        name: 'Squirtle', 
        frontImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png", 
        moves: ["bubble", "water gun", "withdraw"]  
    },
];

app.get('/', (req, res) => {
    res.send('Hello Gustaf!')
})

app.get('/pokemon', (req, res) => {
    res.send(pokemon)
})

app.get('/pokemon/:id', (req, res) => {
    const id = parseInt(req.params.id) - 1;
    res.send(pokemon[id])
})

app.post('/pokemon', (req, res) => {
    res.status(405).send('Not Allowed yet!');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})