const app = require('express')
const router = app.Router()

router.get('/', (req, res) => {
	res.json({
		msg: 'Welcome 👋',
	})
})

router.post('/file', (req, res) => {
	let type = req.body.type || 'js'

	res.json({
		type,
	})
})

module.exports = router
