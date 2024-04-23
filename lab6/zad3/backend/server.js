const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Define Schema
const userSchema = new mongoose.Schema({
    name: String
});

// Create Model
const User = mongoose.model('User', userSchema);

// Connect to MongoDB
mongoose.connect('mongodb://db:27017/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Connection Event Handling
mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});
mongoose.connection.on('disconnected', () => {
    console.log('Disconnected from MongoDB');
});

app.get('/', async (req, res) => {
    try {
        const user = new User({ name: 'John' });
        await user.save();
        console.log('User saved', user);
        const users = await User.find();
        console.log('Users found', users);
        res.json(users);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
app.post('/', async (req, res) => {
    try {
        const user = new User({ name: 'John' });
        await user.save();
        console.log('User saved', user);
        const users = await User.find();
        console.log('Users found', users);
        res.json(users);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
