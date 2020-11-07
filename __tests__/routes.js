const request = require('supertest')
const app = require('../server/server')

describe('GET Endpoints', () => {
	describe('/', () => {
		it('should return a welcome message', async () => {
			const res = await request(app).get('/')

			expect(res.statusCode).toEqual(200)
			expect(res.body).toHaveProperty('msg')
			expect(res.body.msg).toEqual('Welcome 👋')
		})
	})
})

describe('POST Endpoints', () => {
	describe('/file', () => {
		it('type by default should be "js"', async () => {
			const res = await request(app).post('/file')

			expect(res.statusCode).toEqual(200)
			expect(res.body).toHaveProperty('type')
			expect(res.body.type).toEqual('js')
		})

		it('type should be "java"', async () => {
			const res = await request(app).post('/file').send({
				type: 'java',
			})

			expect(res.statusCode).toEqual(200)
			expect(res.body).toHaveProperty('type')
			expect(res.body.type).toEqual('java')
		})

		it('numeric type should return 400 code', async () => {
			const res = await request(app).post('/file').send({
				type: 1,
			})

			expect(res.statusCode).toEqual(400)
			expect(res.body).not.toHaveProperty('type')
			expect(res.body).toHaveProperty('error')
		})
	})
})
