import {db} from "./mongoDb.js"; 

const collection = db.collection('Scorce')


export async function createRool(obj){
   obj.createdAt = new Date().toLocaleString()
   await collection.insertOne(obj)
}




export async function returnTenWinneGame(params){
    console.log(params)
    const result =  await collection.find({game:params.game}).limit(2).sort({points:-1}).toArray()
    return result
}


