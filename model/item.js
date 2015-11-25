/**
 * Created by duanziyu3 on 2015/11/25.
 */
var mongoose = require("../db/db.js");


var itemSchema = mongoose.Schema({
    name:String,
    price:String
});
var item = mongoose.model('item',itemSchema);

module.exports=item;