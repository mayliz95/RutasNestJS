import {Controller, Get} from "@nestjs/common";
const fs = require('fs')

@Controller()
export class InicioController {

    constructor() {}
    @Get('Home')
    root(): string {
        //console.log('Entro al metodo')
        let htmlHeader = fs.readFileSync(__dirname +'/html/header.html', 'utf8', );
        let htmlCOntenido = fs.readFileSync(__dirname +'/html/contenido.html', 'utf8', );
        let htmlFooter = fs.readFileSync(__dirname +'/html/footer.html', 'utf8', );
        let html = htmlHeader + htmlCOntenido + htmlFooter;
        //console.log(html);
        return html;
        }
}