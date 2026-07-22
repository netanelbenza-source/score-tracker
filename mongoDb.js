import { MongoClient } from "mongodb";
import 'dotenv/config'


const client = new MongoClient(process.env.MONGO_URI)


async function connectMongo(){
try{
await client.connect()
const db = client.db('score-tracker')
return db
}
catch(err){
    console.error(err)
    throw(err)
}

}

export const db = await connectMongo()




