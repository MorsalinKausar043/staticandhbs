const express = require('express');
const app = express();
const path = require('path');
const port = 8000 ;

const staticpath = path.join(__dirname , "../public/src")

app.use(express.static(staticpath));

app.get('/',(req,res)=>{
    
    res.status(201).render('index');
})

app.listen(port , ()=>{

    console.log(`Server port number ${port}`)
})