const path = require('path');
const express = require('express');
const fs = require('fs');
const router = express.Router();


router.get('/chats',(req, res, next)=>{
    fs.readFile('message.txt', (err, data)=>{
        if(err){
            console.log(err);
        }
       res.send(`${data} <html lang="en">
       <head>
         <meta charset="UTF-8" />
         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
         <title>Chats</title>
       </head>
       <body>
         <form method="POST" action="/chats">
           <input type="text" name="message" placeholder="Type Message" />
           <input type="hidden"  name="username" id="username" />
           <button type="submit">Send</button>
         </form>
       </body>
         <script>
           const userName = document.getElementById('username');
           userName.value = localStorage.getItem('username');
         </script>
     </html>` )
       
    })
})
router.post('/chats',(req, res, next)=>{
const body = req.body;
fs.writeFile('message.txt', `${body.username} : ${body.message} `, {flag: 'a'}, (err)=>{
    err? console.log(err) : res.redirect('/chats');
})
})

module.exports = router;