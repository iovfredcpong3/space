const express = require('express');
const router = express.Router();
const db = require('../db')


router.post('/login', async(req, res) => {
    
  const { username, password } = req.body;
  let lstatus = 0
  try {
    if(!username||!password){
        throw new Error('EEEERRROOO')
    }

    alluser = await db
        .select('name')
        .from('info')
    
        const x = {name : username}
        const user = {};
        for (let i = 0; i < alluser.length; i++) {
            if(JSON.stringify(x) === JSON.stringify(alluser[i])){
                alluser = await db
                    .select('password')
                    .from('info')
                    .where('name',username)
                    const user = await db.select('*').from('info').where('name',username)
                    const y = {password : password}
                    for (let i = 0; i < alluser.length; i++) {
                        if(JSON.stringify(y) === JSON.stringify(alluser[i])){
                            lstatus = 1
                            req.session.user = user;
                            req.session.save();
                            console.log(req.session.user)
                            const scoreuser = await db.select('*').from('info')
                            return res.render('home', { user,scoreuser});
                            
                        }
                    }  
         }
        }
        if(lstatus===1){
            response.redirect('/')
        }else{
            throw new Error('no text')
        }
} 	catch (error) {
    console.error(error)
    console.error(lstatus)
    return res.render('login', { message: 'Email or Password incorrect' });
}

});

router.post('/auth/login',async (request,response)=>{
    const{ rname,score }=request.body ?? {}
    try {

        alluser = await db
        .select('point').where({name:rname})
        .from('info')
        var e = Number(score)
        c = alluser[0]
        console.log(z)
        const x = {name : rname}

        if (e > c){
        await db.update({point : score}).where({name:rname}).into('info')
        console.log("UPDATE เรียบร้อย")
    
        }else{
            throw new Error('UPDATE ไม่สำเร็จ')
        }
        

    } catch (error) {
        let errorMessage = error
        console.log(error)
    }
})

module.exports = router;