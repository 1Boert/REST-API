/**
 * Verarbeitung der route "/api/product"
 */

const express = require('express');
const router = express.Router();

const Product = require('../models/product.model');

// /product?idFr=myIdFrom&idTo=myIdTo

router.get("/", (req, res) => {
    const idFr = req.query.idFr ? req.query.idFr : "";
    const idTo = req.query.idTo ? req.query.idTo : "";
    if (idFr === "" || idTo === "") {
        res.send("empty")
    } else {
        Product.getProductsList(idFr, idTo, (err, result) =>{
            if(err){
                console.log("fehla");
                res.send("fehler: \n idFrom: " + idFr + " idTo: "+ idTo);
            }else{
                console.log(result);
                res.send("passt: \n idFrom: " + idFr + " idTo: "+ idTo);

            }
        })
    }
    
});

module.exports = router;