var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + "/views/";

router.use(function (req,res,next) {
  next();
});

app.get("/",function(req, res){
  res.sendFile(path + "index.html");
});


app.use(express.static(__dirname + '/public'));

app.listen(3000,function(){
  console.log("Live at Port 3000");
});
