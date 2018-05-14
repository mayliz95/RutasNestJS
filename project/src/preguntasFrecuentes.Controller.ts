import {Body, Controller, Get, Post} from "@nestjs/common";
const fs = require('fs');

@Controller('PreguntasFrecuentes')
export class PreguntasFrecuentesController {

    preguntasFrecuentes: PreguntaFrecuente [] = [];

    @Post('AnadirPregunta')
    anadirPregunta(@Body() bodyParams) {
        const preguntaFrecuente = new PreguntaFrecuente(bodyParams.pregunta, bodyParams.respuesta);
        this.preguntasFrecuentes.push(preguntaFrecuente);
        return this.preguntasFrecuentes;
    }

    @Get('MostrarPreguntas')
    mostrarPreguntas(): String{
        let mostrarHtml = "";

        let res = this.preguntasFrecuentes.forEach(
            (valorDelArreglo) => {
                let html = fs.readFileSync(__dirname + '/html/listaPreguntas.html', 'utf8',);
                html = html.replace('{{pregunta}}', valorDelArreglo.pregunta);
                html = html.replace('{{respuesta}}', valorDelArreglo.respuesta);
                mostrarHtml += html;
            }
        );
        return mostrarHtml;
    }
}

class PreguntaFrecuente {

    constructor(
        public pregunta?: String,
        public respuesta?: String
    ) {};
}