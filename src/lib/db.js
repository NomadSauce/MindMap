import mysql from 'mysql2'

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '1qaz',
    database: 'notes_app'
}).promise()

const result = pool.query('SELECT * FROM  notes_app')
console.log(result)