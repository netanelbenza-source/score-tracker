import {db} from "./mongoDb.js"; 

const collection = db.collection('Scorce')


export async function createRool(obj){
   obj.createdAt = new Date().toLocaleString()
   await collection.insertOne(obj)
}




export async function returnTenWinneGame(params){
    const result =  await collection.find({game:params.game}).limit(2).sort({points:-1}).toArray()
    return result
}


export async function returnTenWinneAllGame(){
   const result =  await collection.find({},{_id:1,playerName:1, game:1, points:1, createdAt:1}).limit(3).sort({points:-1}).toArray()
   return result
}