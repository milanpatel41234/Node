const path = require('path');
const express = require('express');
const router = express.Router();


router.get('/login',(req, res, next)=>{
    res.sendFile(path.join(__dirname, '..', 'views', 'login.html'));
})

module.exports = router;