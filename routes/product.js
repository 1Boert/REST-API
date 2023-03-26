/**
 * Verarbeitung der route "/api/product"
 */

const express = require("express");
const router = express.Router();

const Product = require("../models/product.model");

// /product?idFr=myIdFrom&idTo=myIdTo

router.get("/", (req, res) => {

  const idFr = req.query.idFr ? req.query.idFr : "";
    const idTo = req.query.idTo ? req.query.idTo : "";
    
    Product.getProductsList(idFr, idTo, (err, result) => {
      
    if (err) {
        console.log(`send error ${err.status}: ${err.message}`)
      res.status(err.status).json({replyinfo: err.message });
        
    } else {
        //console.log(result);
        res.json({products: result});
    }
  });
});

module.exports = router;
