/**
 * Created by duanziyu3 on 2015/11/25.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
    console.log("数据库连接成功");
});
module.exports = mongoose;