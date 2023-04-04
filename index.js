import express from "express";
import cors from 'cors';

import { addNewAnimal } from "./src/animals.js";

const PORT = 3002

const app = express()
app.use(cors())
app.use(express.json()) // this tells express that our POSTS will be JSON

// app.get('/animals',getAllAnimals)
app.post('/animals',addNewAnimal)
app.post('/animals',(req, res) => addNewAnimal(req, res)) // same as line 13

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}...`)
})