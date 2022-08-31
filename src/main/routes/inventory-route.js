const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const cors = require("cors");
const Product = require("../schemas/productSchema");

router.use(cors());

//SETUP PARSE TO EXPECT JSON
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

//CREATE
router.post("/product", (req, res) => {
    Product.create(req.body)
    res.send("Created!");
});

//VIEW LIST OF ITEMS
router.get("/products", (req, res) => {
    res.send('Implement logic to get all the products.')
});

//EDIT
router.put("/product/:productId/edit", (req, res) => {

    res.send('Implement logic to update a product by an Id.')
  // let productId = Number(req.params.productId);
  // let updatedItem = {};
  // if (storage.has(productId)) {
  //   updatedItem = storage.get(productId);
  //   updatedItem.name = req.body.name;
  //   updatedItem.description = req.body.description;
  //   updatedItem.price = req.body.price;
  //   updatedItem.quantity = req.body.quantity;
  //   storage.set(productId, updatedItem);
  //   res.send("Item has been updated!");
  // }
});

//DELETE
router.delete("/product/:productId", (req, res) => {
  // let productId = Number(req.params.productId);

  res.send('Implement logic to delete a product by an id.')
  // if (storage.has(productId)) {
  //   deletedStorage.set(productId, storage.get(productId));
  //   storage.delete(productId);
  //   if (req.body.comment !== undefined) {
  //     deletedComments.set(productId, req.body.comment);
  //   }
  //   res.send("Item has been deleted!");
  // } else {
  //   res.send("Item not found for deletion!");
  // }
});

//UNDELETE
router.put("/product/:productId/undelete", (req, res) => {
  // let productId = Number(req.params.productId);

  res.send('Implement logic to undelete a product by an id. This can be done at a much later date.')
  // if (deletedStorage.has(productId)) {
  //   storage.set(productId, deletedStorage.get(productId));
  //   deletedStorage.delete(productId);
  //   if (deletedComments.has(productId)) {
  //     deletedComments.delete(productId);
  //   }
  //   res.send("Item has been undeleted!");
  // } else {
  //   res.send("Item is not found in deletedStorage!");
  // }
});

//VIEW LIST OF DELETED COMMENTS
router.get("/deletedComments", (req, res) => {
  // let result = [];

  res.send('Implement logic to add comments to a product. This can be done at a later date.');
  // deletedComments.forEach((value, key) => {
  //   let comment = {
  //     id: key,
  //     comment: value,
  //   };
  //   result.push(comment);
  // });
});


module.exports = router;
