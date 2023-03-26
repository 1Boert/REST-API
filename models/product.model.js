const dbcon = require('./db');
const sqlQuery = require('./sqlQuery');

// representiert einen Productdatensatz
const Product = function(productData){
    this.ID = productData.ID;
    this.Name = productData.Name;
    this.ModelNumber = productData.ModelNumber;
    this.gewicht = productData.gewicht;
    this.groesse = productData.groesse;
}

Product.getProductsList = async (idFrom, idTo, resultData) => {
    


    // Definition error Typen
    const internalError = Error("technical error");
    const requestError = Error("request error");
    internalError.status = 500;
    requestError.status = 400;
   

    try {

        // falls keine Productids mitgegeben wurden
        if (idFrom === "" || idTo === "") {
            console.log("request error: empty query strings");
            throw requestError;
        }

        // anzahl der zu erwartetenden datensätze bestimmen
        const queryCountResult = await sqlQuery('SELECT COUNT(*) as count FROM Product WHERE ID >=? AND ID <=?', [idFrom, idTo], dbcon);
        const queryCount = queryCountResult[0].count;
        console.log("data sets count: " + queryCount);
        
        // falls datenbankanfrage mehr als 100 datensätze liefert
        if (queryCount > 100) {
            console.log("request error: more than 100 datasets");
            throw requestError;
        }

        if (queryCount <= 0) {
            console.log("no datasets found");
            throw requestError;
        }

        const dataSetResults = await  sqlQuery(
            'SELECT * FROM Product WHERE ID >= ? AND ID <= ? ORDER BY ID', [idFrom, idTo], dbcon
        );

        let temp = Array();
        dataSetResults.forEach( (e) => {
            temp.push( new Product(e) );
        });
        resultData(null, temp);
        return;

    } catch (e) {
        resultData( e, null);
    }
    
}

module.exports = Product;