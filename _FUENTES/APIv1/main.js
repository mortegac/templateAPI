'use strict'
// Inyection of Dependencies
import bodyParser from 'body-parser'
import express from 'express'
import cors from 'cors'
import logger from 'simple-express-logger'
import mongoose from 'mongoose'
mongoose.Promise = global.Promise;

//Rutas
import publicRoutes from './app/public.routes'
import privateRoutes from './app/private.routes'


const app = express()

// MIDLEWARES
// =============================================================================
app.use(logger());
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())

const port = process.env.PORT || 4000
const router = express.Router();  



// INCLUDE ROUTES - PRIVATE AND PUBLIC
// =============================================================================
const publicRoute  = publicRoutes.map (p => 	app.use('/api', p) );
const privateRoute = privateRoutes.map(p => 	app.use('/api/private', p) );



// START THE SERVER
// =============================================================================
mongoose.createConnection('mongodb://127.0.0.1:27020/gcaProyectos',(err, res)=> {
    if(err){
        return console.log(`Error al conectar con la Base de Datos ${err}`)
    }
    app.listen(port, () =>{ console.log(`API REST corriendo en el puerto ${port}`); })

})


console.log('Running in port ' + port);


export default app