/**
 * @api {get} /comentarios/:id Comentarios asociados a una Tarea
 * @apiName GetComentarios
 * @apiGroup PROYECTOS
 *
 * @apiParam {Number} id de la Tarea ID-UNICO.
 *
 * @apiSuccess {String} IdComentario Nombre Descripción Fecha-Inicio Fecha-Termino 
 * 
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */
const express = require('express')
const app = express.Router()


    app.get( '/comentarios', (req,res) => {
        res.json({ message: 'GET: Comentarios' }); 
    })

export default app


