const inventoryRoutes = require('./main/routes/inventory-route');
const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose')
const config = require('dotenv')

app.get('/',(req,res) => {
    res.send("Welcome to Abegail\'s Inventory Tracking web application!")
  })

app.use('/inventory',inventoryRoutes);
app.listen(port, ()=> console.log(`Listening on port ${port}`));

