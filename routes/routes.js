const app = require('express')
const router = app.Router()

router.get('/', (req, res) => {
	res.json({
		msg: 'Welcome 👋',
	})
})

router.post('/file', (req, res, next) => {
	let type = req.body.type || 'js'

	if (Number(type)) {
		res.status(400).json({
			error: 'file type cannot be a number',
		})
	}

	res.json({
		type,
	})
})

module.exports = router
