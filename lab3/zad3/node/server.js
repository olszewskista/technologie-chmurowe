const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/timeout', async (req, res) => {
    await new Promise(resolve => setTimeout(resolve, 5000));
    res.send('Hello World with timeout!');
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});