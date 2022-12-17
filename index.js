//console.clear()
const { crearArchivoDeTabla } = require('./helpers/multiplicar')
const colors = require('colors')
const argv = require('./config/yargs')


//console.log(colors.red.bgWhite.italic(argv))
console.log(colors.inverse("La Base es: " + argv.base))
//console.log(Base)
//console.log('hello'.green);
crearArchivoDeTabla(argv.b, argv.l, argv.h)
     .then(NombreArchivo => console.log(NombreArchivo.blue, "CREADA".rainbow))
         .catch(err => console.log(err))
    