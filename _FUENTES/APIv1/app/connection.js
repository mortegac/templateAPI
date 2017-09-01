var mongoose = require('mongoose')
    mongoose.connect('mongodb://127.0.0.1:27020/gcaProyectos')

var db = mongoose.connection

    db.on('error', console.error.bind(console, 'Connection Error : '))
    db.once('open', function(){
        console.log('Connection ok!')
    })

module.exports = mongoose