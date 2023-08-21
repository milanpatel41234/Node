const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/addproduct',(req, res, next)=>{
    res.send('<html><body><form action="/submitproduct" method="POST"><input type="text" name="title" placeholder="product name"><input type="text" name="size" placeholder="size"><button type="submit">Submit</button></form></body></html>');
    
})
app.post('/submitproduct',(req, res, next)=>{
    const body = req.body;
    console.log(body);
    res.redirect('/addproduct');
})
app.use('/',(req, res, next)=>{
    res.send('<h1>hello from express</h1>');
})

app.listen(3000);