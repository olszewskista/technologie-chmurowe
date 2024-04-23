const express = require('express');
const mysql = require('mysql2');

const app = express();

const connection = mysql.createConnection({
    host: 'db',
    port: "3306",
    user: 'root',
    password: "123",
    database: 'mysql',
});

connection.connect((err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("connected to db")
    }
})

app.get('', async (req, res) => {
    connection.query('select * from user', (err, results) => {
        if (err) {
            res.status(500).send()
        } else {
            res.send(results)
        }
    })
})

app.listen(3000, () => {
    console.log('server listening on port 3000');
});
