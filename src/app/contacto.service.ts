import { Injectable } from '@angular/core';


//Con el @injectable consguimos que esta clase se convierta en un servicio y
//de esta manera pueda ser inyectado como dependencia en los otros componentes
@Injectable()
export class ContactoService {

  private _contactos: string[] = [
      'Elon Musk',
      'Tim Cook',
      'Bill Gates'
    ]

  obtenerContactos(): string[] {
    return this._contactos
  }

  //Un delete no debe devolver nada en el cuerpo de la respuesta por eso es un void
  eliminarContacto(contacto: string): void {
    this._contactos = this._contactos.filter((c: string): boolean => c !== contacto)
  }

}
