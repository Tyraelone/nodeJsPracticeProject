/**
 * Created by aaa on 2015/11/23.
 */
var superAgent  =require('superagent');
var cheerio=require('cheerio');

var init=function(io){
    io.on('connection',function(socket){
        socket.on("spiderStart",function(){
            superAgent.get('http://99114.com')
                .end(function(err,sres){
                    if(err){
                        return;
                    }
                    var $ = cheerio.load(sres.text);
                    var items=[];
                    $('a[rel="nofollow"]').each(function (idx, element) {
                        var $element = $(element);
                        items.push({
                            title: $element.text()

                        });
                        io.emit("data",$element.text());

                    });


                });
        });
    });
}

module.exports=init;