const path = require('path');
const express = require('express');
const router = express.Router();


router.get('/addproduct',(req, res, next)=>{
    res.sendFile(path.join(__dirname, '../', 'views', 'addproduct.html'))
})
router.post('/submitproduct',(req, res, next)=>{
    const body = req.body;
    console.log(body);
    res.redirect('/addproduct');
})

module.exports = router;