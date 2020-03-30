const express=require('express')
const bcrypt=require('bcrypt')
const app= express()
const users=[]
app.set('view-engine','ejs')
app.use(express.urlencoded({extended:false}))

app.get('/',(req,res)=>{

    res.render('index.ejs',{name:'sai'})
})

app.get('/login',(req,res)=>{
    res.render('login.ejs')
})

app.post('/login',(req,res)=>{
    res.render('login.ejs')
})

app.get('/reg',(req,res)=>{
    res.render('reg.ejs')
})
app.post('/reg',async(req,res)=>{
 try{
    const hashedPassword = await bcrypt.hash(req.body.password,10)
    users.push({
        id:Date.now().toString(),
        name:req.body.name,
        email:req.body.email,
        password:hashedPassword

    })
    console.log(users)
    res.redirect('/login')
 } catch{
    res.redirect('/reg')
 }
    console.log(users);
    
})

app.listen(3000)