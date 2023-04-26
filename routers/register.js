const express = require('express')
const router = express.Router()
const db = require('../db')

router.get('/',(request,response)=>{
    response.render('register')
})

router.post('/',async (request,response)=>{
    const{ rname,rpassword,repass }=request.body ?? {}
    try {
        if(!rname||!rpassword||!repass){
            throw new Error('กรุณากรอกให้ครบทุกช่อง')
        }
        else if(rpassword != repass){
            throw new Error('รหัสผ่านไม่ตรงกัน')
        }

        alluser = await db
            .select('name')
            .from('info')
        
            const x = {name : rname}
            for (let i = 0; i < alluser.length; i++) {
                if(JSON.stringify(x) === JSON.stringify(alluser[i])){
                    throw new Error('ชื่อนี้มีผู้ใช้แล้ว')
              }
            }
        //Create account
        await db.insert({ 
            name: rname,
            password: rpassword,
            point: 0
        }).into('info')
        

    } catch (error) {
        let errorMessage = error
        return response.render('register',{errorMessage})
    }
    response.redirect('/register/done')
})

router.get('/done',(request,response)=>{
    response.render('regisDone')
})

module.exports = router