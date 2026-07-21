import { MongoClient } from "mongodb";
import 'dotenv/config'

async function connectMongo(){
try{
const connectionMongo = new MongoClient(process.env.MONGO_URI)
const connect = await connectionMongo.connect()
const db = connect.db('score-tracker')
return db
}
catch(err){
    throw(err.message)
}

}

export const db = await connectMongo()


