var express=require('express')
app=express()
ejs=require('ejs')
app.set('view engine','ejs')
app.use(express.static("public"));
app.listen('3000',function(){
    console.log("started");
})
app.get("/",function(request,response){
    response.render("index");
})