import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    const date = new Date();
    return {
      message: 'Hola, la fecha y hora de hoy es:',
      mensage: 'Hola, buena tarde',
      date: date.toLocaleString(),
      
    };
  }
}
