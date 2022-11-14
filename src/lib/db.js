
import mysql from 'mysql2'
import { todoStore, nodeStore } from '../stores/store.js'

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'matt',
//     password: '1234567',
//     database: 'todos',
// })

// connection.query(
//     "SELECT * from todolist",
//     function(err, results, fields) {
//         console.log('Results: ', results)
//         // console.log('fields: ', fields)
//     }
// )

export const pool = mysql.createPool(
    {
        host: 'localhost',
        user: 'matt',
        password: '1234567',
        database: 'todos',
    }
).promise()

export async function getNotes() {
    try {
        const [rows] = await pool.query('SELECT * from todolist')
        console.log('getNotes', rows)
        todoStore.update(todoStore => todoStore = rows)
        return rows

    } catch (error) {
        console.log('Err', error)
    }
    
    // console.log('Results: ', rows)
}
// getNotes()

export async function getNote(id) {
    const [rows] = await pool.query(`
    SELECT * 
    FROM todolist
    WHERE id = ?
    `, [id])
    return rows[0]
}

export async function createNote(name, todo) {
    console.log('Create Note:::', name, todo)
    let id = Math.floor((Math.random() * 100000) + 1)
    const [result] = await pool.query(`
    INSERT INTO todolist (id, name, todo)
    VALUES (?, ?, ?)
    `, [id, name, todo])
    console.log('createNote', result)
    let noteId = await getNote(result.insertId)
    console.log('Note Result', noteId)
    return getNote(result.insertId)
}
// console.log(createNote('Outside Results', 'test'))

