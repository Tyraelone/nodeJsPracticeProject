

function socketInit(io){
    io.on('connection',function(socket){
        console.log('a user connected');
        socket.on('getMessage', function(data){
            io.emit("heh");
        });
        socket.on('disconnect', function(data){
            console.log("one left");
        });
    });
    return io;
}


module.exports=socketInit;