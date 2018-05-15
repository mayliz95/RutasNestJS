import {Body, Controller, Get, Post} from "@nestjs/common";
const fs = require('fs');

@Controller('PreguntasFrecuentes')
export class PreguntasFrecuentesController {
    private _preguntasFrecuentes: PreguntaFrecuente [] = [];

    @Post('AnadirPregunta') 
    anadirPregunta(@Body() bodyParams) {
        const preguntaFrecuente = new PreguntaFrecuente(bodyParams.pregunta, bodyParams.respuesta);
        this._preguntasFrecuentes.push(preguntaFrecuente);
        return this._preguntasFrecuentes;
    }

    @Get('MostrarPreguntas')
    mostrarPreguntas(): String{
        let mostrarHtml = "";

        let res = this._preguntasFrecuentes.forEach(
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