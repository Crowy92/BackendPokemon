const request = require('supertest');
const app = require('../app')

describe('API server', () => { 
    let api;

    beforeAll(() => {
        api = app.listen(5000, () => {
            console.log(`Example app listening on port 5000`)
        })
    })

    afterAll((done) => {
        console.log("gracefully stopping test server");
        api.close(done);
    })

    it('responds to get / witha status of 200', (done) => {
        request(api).get('/').expect(200, done);
    })

    it('retrieves all pokemon', (done) => {
        request(api).get('/pokemon').expect(200, done)
    })

    it('retrieves a specific pokemon', (done) => {
        request(api).get('/pokemon/3').expect(200)
        .expect({ id: 3, 
            name: 'Squirtle', 
            frontImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png", 
            moves: ["bubble", "water gun", "withdraw"]  
        }, done)
    })

    let testPoke = {
        name: 'Pikachu',
        frontImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png", 
        moves: ["thunder", "thunderbolt", "mega punch"]
    };

    it('reponds to a post request with status code 201', (done) => {
        request(api)
            .post('/pokemon')
            .send(testPoke)
            .expect(201)
            .expect({ id: 4, ...testPoke }, done)
    })

    it('responds to delete /pokemon/:id with status 204', async () => {
        await request(api).delete('/pokemon/4').expect(204);
        const updatedPokes = await request(api).get('/pokemon');
        expect(updatedPokes.body.length).toBe(3);
    })
})