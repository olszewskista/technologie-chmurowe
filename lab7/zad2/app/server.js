const express = require('express')
const mongoose = require('mongoose')
const app = express()

mongoose.connect('mongodb://db:27017/users')
const User = mongoose.model('User', {name: String, last_name: String})

app.get('/users', async (req, res) => {
    const result = await User.find({})
    res.json(result)
})

app.listen(3000, () => {
    console.log('server listening on port 3000')
})