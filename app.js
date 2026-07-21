import 'dotenv/config'
import express from 'express'

const PORT = process.env.PORT 

const server = express()

server.use(express.json())














server.listen(PORT,()=>{
    console.log(`I listen in port ${PORT}`)
})