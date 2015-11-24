/**
 * Created by aaa on 2015/11/23.
 */
var superAgent  =require('superagent');
var cheerio=require('cheerio');

var init=function(io){
    io.on('connection',function(socket){
        socket.on("spiderStart",function(data){
            getShopData(io,encodeURI('http://gongying.99114.com/listing/'+data.name));
        });
    });
}

function getShopData(io,url){
    superAgent.get(url)
        .end(function(err,sres){
            if(err){
                return;
            }
            var $ = cheerio.load(sres.text);
            var items=[];
            $('div.item').each(function (idx, element) {
                var $element = $(element);
               var price = $element.find("div.price").text();
                var name=$element.find(".J_U2IStat").text();
                io.emit("data",{name:name,price:price});

            });
           var newurl=$(".m-page li.next a").attr("href");
            if(newurl){


                newurl="http://gongying.99114.com"+newurl;
                newurl=encodeURI(newurl);
                getShopData(io,newurl);
            }


        });
}

module.exports=init;