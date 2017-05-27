import { Injectable } from '@angular/core';
import { Contacto } from './contacto';
import { Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


//Con el @injectable consguimos que esta clase se convierta en un servicio y
//de esta manera pueda ser inyectado como dependencia en los otros componentes
@Injectable()
export class ContactoService {

  private _contactos: Contacto[] = [
    new Contacto('Elon Musk'),
    new Contacto('Tim Cook'),
    new Contacto('Bill Gates')
  ]

  constructor(private _http: Http) { }

  obtenerContactos(): Observable<Contacto[]> {
    return this._http
              .get('http://localhost:3004/contactos')
              .map((respuesta: Response) => {
                return respuesta.json() as Contacto[];
              })
  }


  crearContacto(contacto: Contacto): Observable<Contacto>{
    return this._http
                .post('http://localhost:3004/contactos', contacto)
                .map((respuesta: Response) => {
                  return respuesta.json() as Contacto
                })
  }

  //Un delete no debe devolver nada en el cuerpo de la respuesta por eso es un void
  eliminarContacto(contacto: Contacto): void {
    this._contactos = this._contactos.filter((c: Contacto): boolean => c.nombre !== contacto.nombre)
  }
}
