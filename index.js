import exp from 'express'
import path from 'path'
import fs from 'fs'

const app = exp();
app.use(exp.urlencoded({extended:true}))
const Port = 2605;


app.get('/',(req,res)=>{
    res.sendFile(path.join(path.resolve(), 'home.html'))
})

app.get('/add',(req,res)=>{
    res.sendFile(path.join(path.resolve(),'index.html'))
    
})
app.get('/delet',(req,res)=>{
    res.sendFile(path.join(path.resolve(),'delete.html'))
})

app.get('/view',(req,res)=>{
    res.send("Hello from VIEW")
})


// Request to add task
app.post('/add',(req,res)=>{
    console.log(req.body.title)
    console.log(req.body.desc)
    // res.sendFile(path.join(path.resolve(),'index.html'))
    })


app.listen(Port,()=>{
    console.log("Server is ON !")
}) 