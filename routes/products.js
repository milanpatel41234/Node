const express = require('express');
const router = express.Router();


router.get('/addproduct',(req, res, next)=>{
    res.send('<html><body><form action="/submitproduct" method="POST"><input type="text" name="title" placeholder="product name"><input type="text" name="size" placeholder="size"><button type="submit">Submit</button></form></body></html>');
    
})
router.post('/submitproduct',(req, res, next)=>{
    const body = req.body;
    console.log(body);
    res.redirect('/addproduct');
})

module.exports = router;