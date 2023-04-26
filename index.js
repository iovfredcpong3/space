const express = require('express');
const hbs = require('hbs')
const app = express();
const generalRouter = require('./routers/general')
const scoreRouter = require('./routers/score')
const registerRouter = require('./routers/register')
const authRouter = require('./routers/auth')
const session = require('express-session');
const cookieParser = require('cookie-parser')
const path = require('path');
const createError = require('http-errors');
require('dotenv').config();
const port = process.env.APP_PORT;


app.use(cookieParser());
app.use(
  session({
    secret: 'my_super_secret',
    resave: false,
    saveUninitialized: false
  })
);


app.use(express.urlencoded({ extended: true}))
app.set('view engine','hbs')
hbs.registerPartials(__dirname+'/views/partials')
app.use('/static',express.static('static'))
app.use('/', express.static(path.join(__dirname, '../EXPRESS')));
app.use('/', express.static(path.join(__dirname, '../static')));

app.use('/auth',authRouter);
app.use('/',generalRouter)
app.use('/score',scoreRouter)
app.use('/register',registerRouter)


app.listen(2222, () =>{
    console.log('Open')
})