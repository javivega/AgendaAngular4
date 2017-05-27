import { Component, OnInit } from '@angular/core';
import { Contacto } from '../contacto';
import { ContactoService } from '../contacto.service';

@Component({
  selector: 'mis-contactos',
  templateUrl: './mis-contactos.component.html',
  styleUrls: ['./mis-contactos.component.css']
})
export class MisContactosComponent implements OnInit {

  private _listaContactos: Contacto[];
  
  constructor( private _contactoService: ContactoService ){
    //Obtento mis cntactos con el metodo del servicio que me los devuelve y se los paso al hijo via template
    //atribute
    this._listaContactos = this._contactoService.obtenerContactos();
  }

  ngOnInit() {
  }

   eliminarContactoSeleccionado(contacto: Contacto): void {
    if(confirm(`Esta seguro que desea elminar a ${contacto.nombre}`))
    this._contactoService.eliminarContacto(contacto);
    this._listaContactos = this._contactoService.obtenerContactos();
  }
}
