const express = require('express');
const router = express.Router();


router.use((req, res, next)=>{
    res.status(404).send('<h1>Ohho! Something went Wronge.</h1><h1>404 Page Not Found</h1>');
})
module.exports = router;