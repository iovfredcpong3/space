const express = require('express')

const db = require('../db')
const dayjs = require('dayjs')
const router = express.Router();
const session = require('express-session');
const cookieParser = require("cookie-parser");

const isLoggedIn = (req, res, next) => {
    if (!req.session.user) {
      res.redirect('/login');
    }
    next();
}


router.get('/',isLoggedIn, function(req,res){
    response.render('home',{user:req.session.user})
})

router.get('/login',(req,res)=>{
    res.render('login')
})

router.get('/register',(req,res)=>{
    res.render('register')
})

router.post('/update',async (request,response)=>{
    const{ rname,score }=request.body ?? {}
    try {

        alluser = await db
        .select('point').where({name:rname})
        .from('info')
        var e = Number(score)   
        const x = {name : rname}
        const scoreuser = await db.select('*').from('info')
        await db.update({point : score}).where({name:rname}).into('info')
        console.log("UPDATE เรียบร้อย")
        

    } catch (error) {
        let errorMessage = error
        console.log(error)
    }
})

router.get('/logout', isLoggedIn, (req, res) => {
    req.session.destroy();
    res.redirect('/');
   });







module.exports = router