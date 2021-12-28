const express = require('express')
const bp = require('body-parser')
const app = express()
const port = process.env.PORT || 5000;

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

app.get('/', (req, res) => {
	res.send('Hello World!')
})

app.post('/apple', (req, res) => {
	console.log(req.body)
	res.send(`Hello World! ${req.body.name}`);
})

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})
