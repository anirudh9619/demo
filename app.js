var express=require('express');

var app=express();

app.get('/',(req, res)=>{
    res.send("Hello this is a demo project for Minishift");
});
var server = app.listen(8080, function(){
    var port = server.address().port;
    console.log("test Server started at http://localhost:%s", port);
});
