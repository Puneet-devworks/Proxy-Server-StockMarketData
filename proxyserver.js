var express = require('express');
var request = require('request');

var app = express();

var port = process.env.PORT || 3001;

const cors = require('cors');
app.use(cors({
    origin: '*'
}));

app.get('/stockMarketData/NSEI', function(req, res){
    request('https://query1.finance.yahoo.com/v7/finance/quote?symbols=^NSEI', function (error, response, body){
        if(!error && response.statusCode == 200){
        res.send(body);
        }
      })
  });

  app.get('/stockMarketData/DJI', function(req, res){
    request('https://query1.finance.yahoo.com/v7/finance/quote?symbols=^DJI', function (error, response, body){
        if(!error && response.statusCode == 200){
          res.send(body);
        }
      })
  });

  app.get('/stockMarketData/BSESN', function(req, res){
    request('https://query1.finance.yahoo.com/v7/finance/quote?symbols=^BSESN', function (error, response, body){
        if(!error && response.statusCode == 200){
          res.send(body);
        }
      })
  });

  app.get('/stockMarketData/IXIC', function(req, res){
    request('https://query1.finance.yahoo.com/v7/finance/quote?symbols=^IXIC', function (error, response, body){
        if(!error && response.statusCode == 200){
          res.send(body);
        }
      })
  });
  
  app.listen(port, function() {
    console.log('proxy server is running on port - ' + port);
  });