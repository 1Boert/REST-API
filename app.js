const express = require('express');
const productRoute = require('./routes/product');

const app = express();

const PORT = 8080;




app.use(express.static('public'));
app.use("/api/product/", productRoute);


app.listen(PORT, () => {
    console.log("app ist auf port: " + PORT);
});
