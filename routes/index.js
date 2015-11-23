var express = require('express');
var router = express.Router();
var superAgent  =require('superagent');
var cheerio=require('cheerio');

/* GET home page. */
router.get('/', function(req, res, next) {
  superAgent.get('http://99114.com')
      .end(function(err,sres){
    if(err){
      return next(err);
    }
        var $ = cheerio.load(sres.text);
        var items=[];
        $('a[rel="nofollow"]').each(function (idx, element) {
          var $element = $(element);
          items.push({
            title: $element.text(),

          });
        });

        res.send(items);
  });

});

module.exports = router;
