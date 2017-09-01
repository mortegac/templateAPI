const express = require('express')
const app = express.Router()


    app.get( '/', (req,res) => {
        res.json({ message: 'GET: Bienvenido' }); 
    })

export default app


