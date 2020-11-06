const app = require('express')
const router = app.Router()

router.get('/', (req, res) => {
	res.json({
		msg: 'Welcome 👋',
	})
})

module.exports = router
