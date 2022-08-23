const inventoryRoutes = require('./main/routes/inventory-route');
const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res) => {
    res.send("Welcome to Abby\'s Inventory Tracking web application!")
  })

app.use('/inventory',inventoryRoutes);
app.listen(port, ()=> console.log(`Listening on port ${port}`));

