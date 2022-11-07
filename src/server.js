import { connectToDB } from './lib/db'
import { ObjectId } from 'mongodb'

export async function get(request) {
    try {
        const dbConnection = await connectToDB()
        const db = dbConnection.db
        const collection = db.collection('Nomad_Sauce')

        return {
            status: 200, 
            body: {
                datA: 'Returned Data'
            }
        }
    }
    catch(err) {
        return {
            status: 500,
            body: {
                error: 'Server Error'
            }
        }
    }
}