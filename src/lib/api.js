import express from 'express'
import { pool, getNote, getNotes, createNote, deleteNote } from './db.js'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Home')
})

app.get('/todos', async (req, res) => {
    const todos = await getNotes()
    res.send(todos)
})

app.post('/todos', async (req, res) => {
    console.log('From API: POST:::', req.body)
    const { name, category_id } = req.body
    const note = await createNote(name, category_id)
    res.status(201).send(note)
})

// app.get('/update/:id', async (req, res) => {
//     console.log('Update (API)', req.params.id)
// })

app.delete('/del/:id', async (req, res) => {
    console.log('Delete Todo: (API)', req.params.id)
    deleteNote(req.params.id)
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Error on server')
})

app.listen(8181, () => {
    console.log('Server running on port 8181')
})