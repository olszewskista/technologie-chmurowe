const express = require('express');
const redis = require('redis');
const {Client} = require('pg')

const postgres = new Client({
    host: 'postgres',
    user: 'postgres',
    password: '123'
})
postgres.connect()

postgres.on('connect', () => {
    postgres.que
    
    ry('CREATE TABLE users(     username varchar(255), password varchar(255));')
    console.log('connected to postgres')
})

// const res = await client.query('SELECT $1::text as message', ['Hello world!'])
// console.log(res.rows[0].message) // Hello world!
// await client.end()

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

app.get('/adduser', async (req, res) => {
    const {user, pass} = req.body
    await postgres.query(`INSERT INTO users (username, password) VALUES ($1, $2)`, [user, pass])
    res.send('user added')
})

app.get('/getuser/:name', async (req, res) => {
    const x = await postgres.query(`SELECT * FROM users WHERE username = $1`, [req.params.name])
    console.log(x)
    res.send(x)
})

app.get('/:key', async (req, res) => {
    const x = await client.get(req.params.key)
    res.send(x)
})


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
