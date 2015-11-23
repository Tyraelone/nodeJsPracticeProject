/**
 * Created by duanziyu3 on 2015/11/23.
 */
var express = require('express');
var router = express.Router();
var superAgent  =require('superagent');
var cheerio=require('cheerio');

router.get('/', function(req, res, next) {

    res.render("index",{
        title:"xxx"
    });
});

module.exports = router;