const { createClient } = require('redis')
const express = require('express');
const app = express();


async function init() {
    const client = createClient();
    
    await client.connect();

    client.on('error', err => console.log('Redis Client Error', err));

    await client.set('key', 'value')
    const value = await client.get('key');
    console.log(value);
}

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

init();