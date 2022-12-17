const writeFile = require('node:fs')
//const Buffer = require('node:buffer')

const crearArchivoDeTabla = async(Num, List, Hasta) => {
    try {
        let Consola = ''
        let Txt = ''
        let tope = 10

        if(Hasta) tope = Hasta

        for(let i = 1; i <= tope; i++){
            //Generador para el Archivo de texto
            if (i == 1){
                Txt += `===============\n Tabla del ${Num} \n===============\n`
            }
            Txt += ` ${Num} x ${i} = ${Num * i}\n`
            //Generador para la consola
            if (i == 1){
                Consola += `===============\n Tabla del ${Num} \n===============\n`.rainbow
            }
            Consola += ` ${Num} x ${i} = ${Num * i}\n`.yellow
        }
        //Callback de retorno cuando todo termine
        if (List) console.log(Consola)
        //Crea el echivo txt
        writeFile.writeFileSync(`./Archivos/Tabla del ${Num}.txt`, Txt)
    
        return `Tabla del ${Num}`
        
    } catch (error) {
        throw error
    }
}//crearArchivoDetabla

module.exports = {
    crearArchivoDeTabla
}