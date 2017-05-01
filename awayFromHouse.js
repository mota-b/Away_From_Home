 
  //////////////////
 //---Requires---//
//////////////////
var http = require("http")
var express = require("express")
var app = express()
var server = http.createServer(app)

var sys = require('sys')
var exec = require('child_process').exec;
function puts(error, stdout, stderr) { /*sys.puts(stdout)*/console.log(stdout) }


  ////////////////
 //---Server---//
////////////////
server.listen("3000",function(){
    console.log("listening port 3000")
})

app.get("/:commande",function(req,res){
    exec(req.params.commande, puts);
    res.send("done");
})