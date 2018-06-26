const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/busyshopping',(err)=> {
    if(!err)
    console.log('Mongodb connection Success');
    else
    console('Error in db' + JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;