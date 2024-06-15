const express = require('express');
const redis = require('redis');

const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Create a Redis client
const client = redis.createClient({url: 'redis://redis:6379'});

client.connect()

client.on('connect', () => {
    console.log('Connected to Redis...');
});

client.on('error', (err) => {
    console.log('Redis error: ', err);
});

// Routes
app.get('/add', async (req, res) => {
    const {key, val} = req.body
    await client.set(key, val)
    const x = await client.get(key)
    res.send(`{${key}: ${val}} added!`);
});

app.get('/:key', async (req, res) => {
    const x = await client.get(req.params.key)
    res.send(x)
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
