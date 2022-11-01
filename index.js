require('express-async-errors');
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());

app.get('/home', async (req, res) => {
    res.json({ hello: 'world' });
});

app.listen(3000, () => {
    console.log('running app');
})