import { Injectable } from '@angular/core';
import {Contacto } from './contacto';


//Con el @injectable consguimos que esta clase se convierta en un servicio y
//de esta manera pueda ser inyectado como dependencia en los otros componentes
@Injectable()
export class ContactoService {

  private _contactos: Contacto[] = [
      new Contacto('Elon Musk'),
      new Contacto('Tim Cook'),
      new Contacto('Bill Gates')
    ]

  obtenerContactos(): Contacto[] {
    return this._contactos
  }

  //Un delete no debe devolver nada en el cuerpo de la respuesta por eso es un void
  eliminarContacto(contacto: Contacto): void {
    this._contactos = this._contactos.filter((c: Contacto): boolean => c.nombre !== contacto.nombre)
  }

  crearContacto(contacto: Contacto): void {
    this._contactos.push(contacto);
  }

}
