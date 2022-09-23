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

    it('responds to invalid methods with 405', (done) => {
        request(api).post('/pokemon').expect(405, done)
    })
})