const express = require('express')

const app = express()

app.get('/', async (req, res) => {
    const response = await fetch('http://localhost:3001/')
    const data = await response.text()
    res.send('service A here, data received: ' + data)
})

app.listen(3000, () => console.log('server listening on port 3000'))