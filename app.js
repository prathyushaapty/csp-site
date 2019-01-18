const express = require('express');
const axios = require('axios');
const app = express();
const path = require('path');
const router = express.Router();
const csp = require('helmet-csp')
// app.use('/', express.static(__dirname+'/js'))
// app.use(function(req, res, next) {
//     // res.header("Content-Security-Policy", "script-src 'self' 'unsafe-inline';");
//     // res.header("Content-Security-Policy",
//     //  "default-src 'self';script-src 'self' https://ajax.googleapis.com;object-src 'none';img-src 'self';media-src 'self';frame-src 'none';font-src 'self' data:;connect-src 'self' https://jsonplaceholder.typicode.com/;style-src 'self'");

//     res.header("X-Content-Security-Policy", "sandbox")
   
   
//     next();
// });

// console.log('get call');
// axios.get('https://jsonplaceholder.typicode.com/todos/1').then(function(response) {
//     console.log('response', response);
// })

app.use(csp({
    directives: {
        defaultSrc: ["'self'", 'default.com'],
        scriptSrc: ["'self'"],
        styleSrc: ['style.com'],
        fontSrc: ["'self'", 'fonts.com'],
        imgSrc: ['img.com', 'data:'],
        sandbox: ['allow-forms', 'allow-scripts'],
        reportUri: '/report-violation',
        objectSrc: ["'none'"],
        upgradeInsecureRequests: true,
        workerSrc: false  // This is not set.
      },
    
      // This module will detect common mistakes in your directives and throw errors
      // if it finds any. To disable this, enable "loose mode".
      loose: false,
    
      // Set to true if you only want browsers to report errors, not block them.
      // You may also set this to a function(req, res) in order to decide dynamically
      // whether to use reportOnly mode, e.g., to allow for a dynamic kill switch.
      reportOnly: false,
    
      // Set to true if you want to blindly set all headers: Content-Security-Policy,
      // X-WebKit-CSP, and X-Content-Security-Policy.
      setAllHeaders: false,
    
      // Set to true if you want to disable CSP on Android where it can be buggy.
      disableAndroid: false,
    
      // Set to false if you want to completely disable any user-agent sniffing.
      // This may make the headers less compatible but it will be much faster.
      // This defaults to `true`.
      browserSniff: true
}));
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