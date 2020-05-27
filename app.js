var express=require('express');

var app=express();
var port =process.env.OPENSHIFT_NODEJS_PORT || 8080;
var service_ip=process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

app.get('/',function(req, res){
    res.send("Hello this is a demo project for Minishift");
});
app.listen(port,service_ip,function(){
    console.log("Listening on PORT "+ port);
})