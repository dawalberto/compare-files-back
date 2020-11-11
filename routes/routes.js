const app = require('express')
const router = app.Router()

router.get('/', (req, res) => {
	res.json({
		msg: 'Welcome 👋',
	})
})

router.post('/files', (req, res, next) => {
	let type = req.body.type || 'js'
	const pathUpload = `${process.cwd()}/uploads/`
	const files = req.files

	if (files) {
		if (Object.entries(files).length > 3) {
			res.status(400).json({
				error: 'the maxim number files for compare is three',
			})
		}

		for (const [key, file] of Object.entries(files)) {
			file.mv(`${pathUpload}/${file.name}`, (error) => {
				if (error) {
					res.status(400).json({
						error: 'fail uploading the files',
					})
				}
			})
		}
	}

	if (Number(type)) {
		res.status(400).json({
			error: 'files type cannot be a number',
		})
	}

	res.json({
		type,
		msg: 'upload!',
	})
})

module.exports = router
