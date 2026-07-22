import express from 'express'
import { createMidle } from '../midle_were.js'
import { schemaScores ,schemaLeaderboar} from '../midle_were.js'
import { createRool,returnTenWinneGame } from '../repoMongo.js'



export const route = express.Router()



route.post('/scores',createMidle(schemaScores,'body'),async(req,res,next) =>{
    try{
    await createRool(req.body)
    res.json({message:'scores created'})}
    catch(err){
        return next(err)
    }
})









route.get('/leaderboard/:game',createMidle(schemaLeaderboar,'params'),async (req,res,next)=>{
    try{
        const result = await returnTenWinneGame(req.params)
        console.log(result)
        res.json({message: "The games winner",games:result})
    }catch(err){
        return next(err)
    }
})
















