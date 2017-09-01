/**
 * @api {get} / API Gestión de Proyectos
 * @apiName GetProyectos
 * @apiGroup PROYECTOS
 *
 * @apiParam {Number} id del Proyecto  ID-UNICO.
 *
 * @apiSuccess {String} IdProyectoo Nombre Descripción Fecha-Inicio Fecha-Termino 
 *  
 */
const express = require('express')
const app = express.Router()


    app.get( '/', (req,res) => {
        res.json({ message: 'GET: Bienvenido' }); 
    })

export default app


