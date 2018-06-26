const express = require('express');
var router = express.Router();

var { Product } = require('../models/product');
// => localhost/employee
router.get('/', (req,res)=>{
    Product.find((err,docs) => {
        if(!err) { res.send(docs);}
        else {
            console.log('error in x'+ JSON.stringify(err,undefined,2));
        }
    });
});

module.exports = router;