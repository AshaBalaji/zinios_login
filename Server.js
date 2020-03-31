const express=require('express');
const bodyparser=require('body-parser');
const cors=require('cors');
const path=require('path')


const app=express();
app.use(express.static(__dirname + '/public'));
app.use(bodyparser());

app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs');


app.get('/dashboard',function(request,response){
    response.render('index',{
        projects: [
            { title: "Project 1", src: "https://images.pexels.com/photos/4031818/pexels-photo-4031818.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},
            { title: "Project 2", src: "https://images.pexels.com/photos/4031818/pexels-photo-4031818.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},
            { title: "Project 2", src: "https://images.pexels.com/photos/4031818/pexels-photo-4031818.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}
        ]
    })
})

app.listen(8000,function(){
    console.log("heard on 8000");
})