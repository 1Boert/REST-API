/**
 * Verarbeitung der route "/api/product"
 */

const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.send("passt");
});

module.exports = router;