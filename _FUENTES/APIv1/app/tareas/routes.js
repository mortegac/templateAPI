const express = require('express')
const app = express.Router()


    app.get( '/tareas', (req,res) => {
        res.json({ message: 'GET: Tareas' }); 
    })

export default app


