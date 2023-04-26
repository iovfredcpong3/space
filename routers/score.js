const express = require('express')
const router = express.Router()
const db = require('../db')

router.get('/',async(request,response)=>{
    const datauser = await db.select('*').from('info')
    response.render('score',{ user: datauser });
})

router.post('/',async (request,response)=>{
    const{ rname,score }=request.body ?? {}
    try {

        alluser = await db
        .select('point').where({name:rname})
        .from('info')
        const x = {name : rname}
        await db.update({point : score}).where({name:rname}).into('info')
        console.log("UPDATE เรียบร้อย")
        response.redirect("score")

        

    } catch (error) {
        let errorMessage = error
        console.log(error)
        response.render("score")
    }
    
})



module.exports = router