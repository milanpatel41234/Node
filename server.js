const HomeRouter = require('./routes/home');
const ProductRouter = require('./routes/products')
const ErrorRouter = require('./routes/error404');
const loginRouter = require('./routes/login');
const chatRouter = require('./routes/chats');
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(ProductRouter);
app.use(loginRouter);
app.use(chatRouter);
app.use(HomeRouter);
app.use(ErrorRouter);

app.listen(3000);