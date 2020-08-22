const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const cartItems = require('./routes/cart');

app.use(cors());

app.use(express.json());
// app.use(express.static(__dirname + "/public"));
app.use('/', cartItems);

app.listen(port, () => console.log(`Listening on port ${port}`));