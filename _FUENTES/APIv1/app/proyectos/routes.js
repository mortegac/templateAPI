const express = require('express')
const app = express.Router()


    app.get( '/proyectos', (req,res) => {
        res.json({ message: 'GET: Proyectos' }); 
    })

export default app


