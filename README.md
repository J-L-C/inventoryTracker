

Welcome! Thank you for taking the time to look at my code for this application. 

This challenge was done in [NodeJS](https://nodejs.org/en/) and [Express](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction)

To run the code, follow these steps:

1. git clone will copy the code here to your machine
2. cd into the directory where you want the code stored
3. `npm` will install all required dependencies
4. `node index.js` will start the server locally on `http://localhost:3000/` by default. 

Test the endpoints using [Postman](https://www.postman.com/)

To run tests, run `npm start` you can customize your start script in `package.json` file if you decide to 

After app is started you should see in terminal 
`Listening on port 3000`

This project is an Inventory Tracking Web Application:

Using basic [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) functionality:

-Create inventory items: 
```
POST /product
{
    "id": 1,
    "name": "Healing Journal:",
    "description": "A journey to Self-Discovery and healing",
    "price": 15.00,
    "quantity": 100
}
response: "Created!" or "The item already exists."
```

-Edit items: 
```
PUT /product/:productId/edit
response:"Item has been updated!"
```
-Delete items:
```
DELETE /product/:productId
{
    "comment":"First deleted comment"
}
response: "Item has been deleted!" else "Item not found for deletion!"
```
Added a feature: When deleting, allow deletion comments and undeletion

Then you can get a list of deleted comments which will return id:key, comment:value
```
GET /inventory/deletedComments
{
        "id": 1,
        "comment": "First deleted comment"
}
```
Undelete items:
```
PUT /product/:productId/undelete
response: "Item has been undeleted!" else "Item is not found in deletedStorage!"
```

-View a list of items:
```
GET /products
[
    {
        "id": 1,
        "name": "Healing Journal:",
        "description": "A journey to Self-Discovery and healing",
        "price": 12.00,
        "quantity": 100
    },
    {
        "id": 2,
        "name": "Workout Hat",
        "description": "Women's ponytail hat",
        "price": 10.00,
        "quantity": 50
    }
]
```
PROJECT DEMONSTRATION: 

To view how the application works, you go can on Replit. Feel welcome to fork it and give it a try :) !!

Please Note: You can test this on [Postman](https://www.postman.com/) 

Just copy the repl url and then update the url to reach different API endpoints. Similiar to, if you were to do it locally
```
GET /products
http://localhost:3000/inventory/products
```
Example to view a list of items:
```
GET /products
https://Shopify-Internship-2022.abegailtaitano.repl.co/inventory/products
```
[Inventory Tracking Web Application](https://replit.com/@abegailtaitano/Shopify-Internship-2022#.replit)

