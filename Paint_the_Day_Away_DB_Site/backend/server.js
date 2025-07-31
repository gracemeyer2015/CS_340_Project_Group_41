// ########################################
// ########## SETUP

// Database
const db = require('./db-connector');

// Express
const express = require('express');
const app = express();

// Middleware
const cors = require('cors');
app.use(cors({ credentials: true, origin: "*" }));
app.use(express.json()); // this is needed for post requests


const PORT = 1923;

// READ ROUTES
//app.get('/', async (req, res) => {
   // try {
        
      //  const query1 = `SELECT Orders.orderID, Orders.date, Orders.quantity, Products.Productname FROM Orders
      //  INNER JOIN Products ON Products.ProductID = Orders.ProductID;`

      //  const query2 = `SELECT * FROM Customers;`

      //  const query3 = `SELECT * FROM Manufacturers;`

       // const query4 = `SELECT ProductReceipts.productReceiptID, Products.productName, Receipts.dateTime, ProductReceipts.quantity FROM ProductReceipts INNER JOIN Products ON Products.productID = ProductReceipts.productID INNER JOIN Receipts ON Receipts.receiptID = ProductReceipts.receiptID;`

       // const query5 = `SELECT Products.productID, Products.productName, Products.price, Products.sellPrice, Products.newProduct, Products.firstDateOrdered, Manufacturers.name from Products INNER JOIN Manufacturers WHERE Manufacturers.manufacturerID = Products.manufacturerID;`

       // const query6 = `SELECT Receipts.receiptID, Receipts.dateTime, Customers.firstName, Customers.lastName FROM Receipts Inner JOIN Customers WHERE Customers.customerID = Receipts.customerID`


        
      //  const [orders] = await db.query(query1);
      //  const [customers] = await db.query(query2);
      //  const [manufacturers] = await db.query(query3);
      //  const [productReceipts] = await db.query(query4);
       // const [products] = await db.query(query5);
       // const [receipts] = await db.query(query6);
    
        //res.status(200).json({ orders, customers, manufacturers, productReceipts, products, receipts});  // Send the results to the frontend

    //} catch (error) {
      //  console.error("Error executing queries:", error);
        // Send a generic error message to the browser
      //  res.status(500).send("An error occurred while executing the database queries.");
  //  }
    
//});

app.get('/customers', async (req, res) => {
    try {
        

        const query1 = `SELECT * FROM Customers;`
      
        
        const [customers] = await db.query(query1);
     
    
        res.status(200).json({ customers });  // Send the results to the frontend

    } catch (error) {
        console.error("Error executing queries:", error);
        // Send a generic error message to the browser
        res.status(500).send("An error occurred while executing the database queries.");
    }
    
});

app.get('/manufacturers', async (req, res) => {
    try {
        
       
        const query1 = `SELECT * FROM Manufacturers;`


        const [manufacturers] = await db.query(query1);

    
        res.status(200).json({ manufacturers });  // Send the results to the frontend

    } catch (error) {
        console.error("Error executing queries:", error);
        // Send a generic error message to the browser
        res.status(500).send("An error occurred while executing the database queries.");
    }
    
});



app.listen(PORT, function () {
    console.log('Express started on http://classwork.engr.oregonstate.edu:' + PORT + '; press Ctrl-C to terminate.');
});