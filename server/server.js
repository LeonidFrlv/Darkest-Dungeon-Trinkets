const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

const allCards = fs.readFileSync('db.json', 'utf-8');

app.get('/cards', (req, res) => {
    res.send(allCards);
});

app.listen(3333, () => console.log(`Started server at http://localhost:3333!`));
