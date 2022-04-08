// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});



app.get("/api",(req,res)=>{
  let utc = new Date();
  let unix = utc.getTime();
  res.json({unix,utc:utc.toGMTString()});
})

app.get("/api/:time", (req,res)=>{
  let unix = Number();
  let utc = String();
  if (isNaN(req.params.time)){
    utc = new Date(req.params.time);
    unix = new Date(req.params.time).getTime();
    if (isNaN(utc)) res.json({error:"Invalid Date"})
    
  }else{
    utc = new Date(Number(req.params.time));
    unix = Number(req.params.time);
  }
  console.log(unix,utc);
  res.json({unix,utc:utc.toGMTString()});
})

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
