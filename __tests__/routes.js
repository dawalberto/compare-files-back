const request = require('supertest')
const app = require('../server/server')

describe('GET Endpoints', () => {
	it('should return a welcome message', async () => {
        const res = await request(app).get('/')
        
        expect(res.body.msg).toEqual('Welcome 👋')
	})
})
