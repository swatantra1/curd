const mongoose = require('mongoose');

var Product = mongoose.model('Product', {
    name: { type:String},
    category: {type: String},
    discription: {type: String},
    stock: {type: Number},
    price: {type: Number}
});

module.exports ={ Product };