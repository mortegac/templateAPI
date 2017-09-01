/**
 * @api {get} /proyectos/:id Lista los proyectos generados
 * @apiName GetProyectos
 * @apiGroup PROYECTOS
 *
 * @apiParam {Number} id del Proyecto  ID-UNICO.
 *
 * @apiSuccess {String} IdProyecto
 * @apiSuccess {String} Nombre Descripción Fecha-Inicio Fecha-Termino 
 * 
 * @api {post} /proyectos/:id Crea un nuevo Proyecto
 */
const express = require('express')
const app = express.Router()


    app.get( '/proyectos', (req,res) => {
        res.json({ message: 'GET: Proyectos' }); 
    })

export default app


