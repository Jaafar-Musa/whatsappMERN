// requires
import express from 'express'
import mongoose from 'mongoose'
import Messages from './dbMessages.js'
import dotenv from 'dotenv'

// app config
const app = express()
dotenv.config()

const port = process.env.PORT


//middlewares
app.use(express.json())


//DB config
//! remove
const connection_url = process.env.DATABASE_URL
mongoose.connect(connection_url,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
})
//????
// use pusher for real time
//api routesggg
app.get('/', (req, res)=>{ 
    return res.status(200).send('hello world')
})
app.post('/messages/new/', (req, res)=>{
    const dbMessage = req.body
    Messages.create( dbMessage, (err, data)=>{
        if(err){
            console.log('test')
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })

})
app.get('/messages/sync', (req, res)=>{
    Messages.find((err, data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
})


//listeners
app.listen( port, ()=>{
    console.log(`listening on localhost:${port}`)
})