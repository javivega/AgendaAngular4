import { Injectable } from '@angular/core';


//Con el @injectable consguimos que esta clase se convierta en un servicio y
//de esta manera pueda ser inyectado como dependencia en los otros componentes
@Injectable()
export class ContactoService {

  obtenerContactos(): string[] {
    return [
      'Elon Musk',
      'Tim Cook',
      'Bill Gates'
    ]
  }

}
