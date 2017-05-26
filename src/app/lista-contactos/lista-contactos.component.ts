import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contacto } from '../contacto';

@Component({
  selector: 'lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent implements OnInit {

  //En este componente hijo le digo a mi variable que le llegan datos del padre con el @input.
  @Input() contactos: Contacto[];

  //Sin embargo para comunicar de hijo a padre lo haremos via notificacion
  //Necesitamos un EventEmitter que es un generico, e indicar por tanto el tipo que notificare string
  //Para que el padre vea este EventEmitter necesito el decorador Output() y asi definimos esta variable
  //Pero aun no esta inicializada, esta inicializacion la hago en el constructor
  @Output() contactoSeleccionado: EventEmitter<Contacto>;

  constructor() {
    //inicialiazaicon de la variable contacto seleccionado
    this.contactoSeleccionado = new EventEmitter<Contacto>();
   }

  ngOnInit() {
  }

  notificarEliminacionContacto(contacto: Contacto): void {
    //si sobre el EventEmitter hago .emit puedo notificar informacion
    this.contactoSeleccionado.emit(contacto);
  }

}
