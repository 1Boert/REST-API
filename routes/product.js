/**
 * Verarbeitung der route "/api/product"
 */

const express = require('express');
const router = express.Router();

// /product?idFr=myIdFrom&idTo=myIdTo

router.get("/", (req, res) => {
    const idFr = req.query.idFr ? req.query.idFr : "";
    const idTo = req.query.idTo ? req.query.idTo : "";
    if (idFr === "" || idTo === "") {
        res.send("empty")
    } else {
        res.send("passt: \n idFrom: " + idFr + " idTo: "+ idTo);
    }
    
});

module.exports = router;