const request = require('supertest')

import { app } from '../server/index.js'

describe('Post Endpoints', () => {
    it('should create a new post', async() => {
        const res = await request(app)
            .post('/cords')
            .send({
                city: "london"
            })
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('city')
    })
})