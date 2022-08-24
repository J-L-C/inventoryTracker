const inventoryRoutes = require('./main/routes/inventory-route');
const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose')
//this gets values from .env file.
// It uses the value MONGO_DB_LOCATION as the connection string
require('dotenv').config()

const connect = mongoose.connect(
    process.env.MONGO_DB_LOCATION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.get('/', (req, res) => {
    res.send("Welcome to Abegail\'s Inventory Tracking web application!")
})

app.use('/inventory', inventoryRoutes);

connect.then(
    () => console.log('Connected :))'),
    (err) => console.log('to err is human but something happened while trying to connect to mongo :( ...... ' + err)
);
app.listen(port, () => console.log(`Listening on port ${port}`));

