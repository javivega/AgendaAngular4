import { Component } from '@angular/core';
import { ContactoService } from './contacto.service'


//seguir desde min 70 sesion 2 dia 1
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _title: string;
  private _listaContactos: string[];

  //Hago la inyeccion de dependencias de mi servicio con modificador de acceso + variable + tipo que sera
  //mi servicio, y ya podre hacer uso de los métodos de mi servicio.
  constructor( private _contactoService: ContactoService ){
    this._title = "Super Agenda";
    //Obtento mis cntactos con el metodo del servicio que me los devuelve y se los paso al hijo via template
    //atribute
    this._listaContactos = this._contactoService.obtenerContactos();
  }

  //Defino en el padre el manejador que se ejecutara cuando se de el evento emitido por el hijo
  eliminarContactoSeleccionado(contacto: string): void {
    this._contactoService.eliminarContacto(contacto);
    this._listaContactos = this._contactoService.obtenerContactos();
  }
}
