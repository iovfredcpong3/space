const express = require('express');
const router = express.Router();
const db = require('../db')


router.post('/update',async (request,response)=>{
    const{ rname,score }=request.body ?? {}
    try {

        alluser = await db
        .select('point').where({name:rname})
        .from('info')
        var e = Number(score)
        c = alluser[0]
        console.log(z)
        const x = {name : rname}

        await db.update({point : score}).where({name:rname}).into('info')
        console.log("UPDATE เรียบร้อย")
        response.render('home',{user:req.session.user})

    } catch (error) {
        let errorMessage = error
        console.log(error)
    }
})