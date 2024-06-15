const express = require('express')

const app = express()

app.get('/', async (req, res) => {
    res.send("service B here")
})

app.listen(3001, () => console.log('server listening on port 3001'))