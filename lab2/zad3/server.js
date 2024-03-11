const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const port = 8080;

app.use(express.json());

const client = new MongoClient('mongodb://mongo:27017');

app.get('/', async (req, res) => {
    await client.connect();
    const dbs = await client.db().admin().listDatabases();
    res.status(200).json(dbs);
    client.close();
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
