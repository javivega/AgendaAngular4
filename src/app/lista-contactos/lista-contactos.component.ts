import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent implements OnInit {

  //En este componente hijo le digo a mi variable que le llegan datos del padre con el @input.
  @Input() contactos: string[];

  //Sin embargo para comunicar de hijo a padre lo haremos via notificacion
  //Necesitamos un EventEmitter que es un generico, e indicar por tanto el tipo que notificare string
  //Para que el padre vea este EventEmitter necesito el decorador Output() y asi definimos esta variable
  //Pero aun no esta inicializada, esta inicializacion la hago en el constructor
  @Output() contactoSeleccionado: EventEmitter<string>;

  constructor() {
    //inicialiazaicon de la variable contacto seleccionado
    this.contactoSeleccionado = new EventEmitter<string>();
   }

  ngOnInit() {
  }

  notificarContactoSeleccionado(contacto: string): void {
    //si sobre el EventEmitter hago .emit puedo notificar informacion
    this.contactoSeleccionado.emit(contacto);
  }

}
