const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({date: new Date().toString()})
})

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
})