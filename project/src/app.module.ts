import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {InicioController} from "./inicio.controller";
import {PreguntasFrecuentesController} from "./preguntasFrecuentes.Controller";

@Module({
    imports: [],
    controllers: [AppController, InicioController, PreguntasFrecuentesController],
    //controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
