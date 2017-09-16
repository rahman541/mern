const path = require('path')
const fs = require('fs')
const express = require('express')

const app = express()

app.set('view-engine', 'html')
app.engine('html', (path, options, callbacks) => {
	fs.readFile(path, 'utf-8', allback);
})

// Middleware
app.use(express.static(__dirname))

// Routes
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'))
})

// Error Handler
app.use((err, req, res, next) => {
	res.status(err.status || 500)
})

const port = process.env.PORT || 8000
app.listen(port, () => {
	console.log(`Server running at localhost:${port}`)
})
