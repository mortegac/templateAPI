/**
 * @api {get} /tareas/:id Lista los tareas generados
 * @apiName GetTareas
 * @apiGroup TAREAS
 *
 * @apiParam {Number} id del Tareas  ID-UNICO.
 *
 * @apiSuccess {String} IdTareas Nombre Descripción Fecha-Inicio Fecha-Termino 
 */
const express = require('express')
const app = express.Router()


    app.get( '/tareas', (req,res) => {
        res.json({ message: 'GET: Tareas' }); 
    })

export default app


