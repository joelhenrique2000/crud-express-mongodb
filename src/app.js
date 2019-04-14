const express = require('express');
const app = express();

app.get('/', async (req, res) => {
    res.send('read');
});

app.post('/', async (req, res) => {
    res.send('create');
});

app.delete('/', async (req, res) => {
    res.send('delete');
});

app.put('/', async (req, res) => {
    res.send('update');
});

app.listen(3000);