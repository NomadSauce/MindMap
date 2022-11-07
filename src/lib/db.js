import dotenv from 'dotenv'
dontenv.config()

import { MongoClient } from 'mongodb'
const { MONGO_URI, MONGO_DB } = process.env
// const client = new MongoClient()

if (!MONGO_URI) {
    throw new Error(
        'Mongo URI Not Defined'
    )
}

if (!MONGO_DB) {
    throw new Error(
        'Mongo DB Not Defined'
    )
}

let cached = global.mongo

if (!cached) {
    cached = global.mongo = { conn: null, promose: null }
}

export async function connectToDB() {
    if (cached.conn) {
        return cached.conn
    }

    if (!cached.promise) {
        const opts = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
        cached.promise = MongoClient.connect(MONGO_URI, opts).then((client) => {
            return {
                client,
                db: client.db(MONGO_DB),
            }
        })
    }
    cached.conn = await cached.promise
    return cached.conn
}