const express=require('express')
const crypto=require('node:crypto')
const z = require('zod')
const app=express()

const PORT = process.env.PORT ?? 1234

const dark_ritual={
    "name": "Dark_Ritual",
    "color": "black",
    "cost": "B",
    "type": "instant",
    "text": "Add 3 black mana to your mana pool"
}

app.disable('x-powered-by')

app.get('/',(req,res)=>{
    res.send('Welcome Planeswalker!')
})

app.get('/ABU/Dark_Ritual',(req,res)=>{
    res.json(dark_ritual)
})

app.post('/ABU',(req,res)=>{
    let body=''
    //escuchar el evento data
    req.on('data',chunk=>{
        body+=chunk.toString()
    })
    req.on('end',()=>{
        const data=JSON.parse(body)
        data.timestamp=Date.now()
        res.status(201).json(data)
    })
})

app.listen(PORT,() => {
    console.log(`server listening on port http://localhost:${PORT}`)
})