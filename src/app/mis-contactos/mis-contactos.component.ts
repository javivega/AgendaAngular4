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
    this._contactoService
      .obtenerContactos()
      .subscribe((contactos: Contacto[])=> {
        this._listaContactos = contactos;
      });
  }

  ngOnInit() {
  }

   eliminarContactoSeleccionado(contacto: Contacto): void {
    if(confirm(`Esta seguro que desea elminar a ${contacto.nombre}`))
    this._contactoService
      .eliminarContacto(contacto)
      .subscribe((contactoEliminado: Contacto) => {
        this._listaContactos = this._listaContactos.filter((c: Contacto): boolean => {
          return c.id !== contactoEliminado.id;
        })
      });
   
  }
}
