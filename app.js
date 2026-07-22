import 'dotenv/config'
import express from 'express'
import {route} from './route/routes.js'
import { ZodError } from 'zod'


const PORT = process.env.PORT 

const server = express()
server.use(express.json())
server.use(route)










function hendleErr(err,req,res,next){
    if (err instanceof ZodError){
        res.status(400).json({
            message:'error',
            error:err.flatten().fieldErrors
        })
    }
    res.status(err.status||500).json({message:err.message||'Server issue'})
}


server.use(hendleErr)





server.listen(PORT,()=>{
    console.log(`I listen on port ${PORT}`)
})