const express = require('express');
const axios = require('axios');
const app = express();
const path = require('path');
const router = express.Router();

// app.use('/', express.static(__dirname+'/js'))
app.use(function(req, res, next) {
    // res.header("Content-Security-Policy", "script-src 'self' 'unsafe-inline';");
    res.header("Content-Security-Policy",
     "default-src 'self';script-src 'self' https://ajax.googleapis.com;object-src 'none';img-src 'self';media-src 'self';frame-src 'none';font-src 'self' data:;connect-src 'self' https://jsonplaceholder.typicode.com/;style-src 'self'");
   
   
    next();
});

// console.log('get call');
// axios.get('https://jsonplaceholder.typicode.com/todos/1').then(function(response) {
//     console.log('response', response);
// })

router.get('/',function(req,res){
    // res.send("<html><body><p>hello world</p><script type='text/javascript'>alert('got you')</script></body><html>");
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/about',function(req,res){
  res.sendFile(path.join(__dirname+'/about.html'));
});

app.get('/js/test.js',function(req,res){
    res.sendFile(path.join(__dirname + '/js/test.js')); 
});

//add the router
app.use('/', router);
app.listen(process.env.port || 3010);

console.log('Running at Port 3010');