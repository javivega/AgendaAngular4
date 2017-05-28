import { Injectable, Inject } from '@angular/core';
import { Contacto } from './contacto';
import { Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { ApiUrl } from './configuracion';


//Con el @injectable consguimos que esta clase se convierta en un servicio y
//de esta manera pueda ser inyectado como dependencia en los otros componentes
@Injectable()
export class ContactoService {


  constructor(
    private _http: Http,
    @Inject(ApiUrl) private _apiUrl) { }

  obtenerContactos(): Observable<Contacto[]> {
    return this._http
              .get(`${this._apiUrl}/contactos`)
              .map((respuesta: Response) => {
                return respuesta.json() as Contacto[];
              })
  }


  crearContacto(contacto: Contacto): Observable<Contacto>{
    return this._http
                .post(`${this._apiUrl}/contactos`, contacto)
                .map((respuesta: Response) => {
                  return respuesta.json() as Contacto
                })
  }

  //Un delete no debe devolver nada en el cuerpo de la respuesta por eso es un void
  eliminarContacto(contacto: Contacto): Observable<Contacto> {
    //this._contactos = this._contactos.filter((c: Contacto): boolean => c.nombre !== contacto.nombre)
   return this._http
        .delete(`${this._apiUrl}/contactos/${contacto.id} `)
          .map(() => {
            return contacto;
          });
  }
}
