const express = require('express')
const app = express.Router()


    app.get( '/comentarios', (req,res) => {
        res.json({ message: 'GET: Comentarios' }); 
    })

export default app


