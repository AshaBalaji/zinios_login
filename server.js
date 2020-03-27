const express=require('express')
//const bcrypt=require('bcrypt')
const app= express()
//const user=[]
app.set('view-engine','ejs')  
//app.use(express.urlencoded({extended:false}))

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
app.post('/reg',(req,res)=>{
    //req.body.name
    
})

app.listen(3000)