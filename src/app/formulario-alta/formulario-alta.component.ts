import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Contacto } from '../contacto';

@Component({
  selector: 'formulario-alta',
  templateUrl: './formulario-alta.component.html',
  styleUrls: ['./formulario-alta.component.css']
})
export class FormularioAltaComponent implements OnInit {

  nombre: string;
  //Creo mi atributo que sera un evento que sera el que se emita luego mas tarde, para notificar.
  @Output() alCrearContacto: EventEmitter<Contacto>;

  constructor() {
    this.alCrearContacto = new EventEmitter<Contacto>();
  }

  ngOnInit() {
  }

  notificarCreaccionContacto(): void{
    // Creo un nuevo objeto del tipo contacto a partir del nombre introducido en la caja de texto 
    let contacto: Contacto = new Contacto(this.nombre);
    this.alCrearContacto.emit(contacto);
  }

}
