const argv = require('yargs')
    .option("b", {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Numero base para multiplicar'
    })
    .option("l", {
        alias: 'list',
        type: 'boolean',
        default: false,
        describe: 'Listar la tabla al generarla'
    })
    .option("h", {
        alias: 'hasta',
        type: 'number',
        default: false,
        describe: 'Eligir hasta que numero multiplicar'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'Bad Request (b! number)'.rainbow
        } else {
            return true
        }
    })
.argv

module.exports = argv