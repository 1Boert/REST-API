const dbcon = require('./db');
const sqlQuery = require('./sqlQuery');

const Product = function(productData){
    this.id = productData.id;
    this.name = productData.name;
    this.modelNumber = productData.modelNumber;
    this.gewicht = productData.gewicht;
    this.groesse = productData.groesse;
}

Product.getProductsList = async(idFrom, idTo, resultData) => {

    try{
        const dataSetResults = await  sqlQuery(
            'SELECT * FROM Product WHERE ID >= ? AND ID <= ?', [idFrom, idTo], dbcon
        );
        let p = Array();
        dataSetResults.forEach( (e) => {
            p.push( new p({...e}) );
        });
        resultData(null, poc, null);
        return
    }catch(err){
        resultData(null, err, null);
    }
}