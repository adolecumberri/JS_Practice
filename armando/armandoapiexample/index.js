
import express,{json} from 'express'
const app=express()

import { randomUUID } from 'node:crypto'

import {pathToRegexp,match,parse,compile} from 'path-to-regexp'
const keys = []
const regexp=pathToRegexp('/foo/:bar',keys)

import cors from 'cors'


app.use(cors({
    origin: (origin,callback)=>{
        const ACCEPTED_ORIGINS=[
            'http://localhost:1234',
            'http://localhost:1000']

        if (ACCEPTED_ORIGINS.includes(origin)){
            return callback(null,true)
        }
        if (!origin){
            return callback(null,true)
        }
        return callback(new Error('Not allowed by CORS'))
    }
}))

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

import { validateCard } from './post_validation.js'

app.post('/ABU',(req,res)=>{
    let body=''
    //escuchar el evento data
    req.on('data',chunk=>{
        body+=chunk.toString()
    })
    req.on('end',()=>{
        const result=validateCard(req.body)
        if(result.error){
            return res.status(400).json({error: result.error.message})
        }
        const newCard={
            id: crypto.randomUUID(),
            ...result.data
        }
        return res.json(newCard)
    })
})

app.patch('/ABU/:id',(req,res)=>{
    const result=validateCard(req.body)

    if (!result.success){
        return res.status(400).json({error:JSON.parse(result.error.message)})
    }

    const {id}=req.params
    const cardIndex= cards.findIndex(card=>card.id === id)
    if (cardIndex===-1){
        return res.status(404).json({message:'Card not found'})
    }
    const updateCard={
        ...cards[cardIndex],
        ...result.data
    }
    cards[cardIndex]=updateCard
    return res.json(updateCard)
})

app.listen(PORT,() => {
    console.log(`server listening on port http://localhost:${PORT}`)
})