import { Component, OnInit } from '@angular/core';
import { Contacto } from '../contacto';
import { Router } from '@angular/router';
import { ContactoService } from '../contacto.service';

@Component({
  selector: 'nuevo-contacto',
  templateUrl: './nuevo-contacto.component.html',
  styleUrls: ['./nuevo-contacto.component.css']
})
export class NuevoContactoComponent implements OnInit {
  
  
constructor( 
  private _contactoService: ContactoService,
  private _router: Router 
  ){}

  ngOnInit() {
  }

 alCrearContacto(contacto: Contacto): void{
    this._contactoService.crearContacto(contacto);
    alert('Contacto creado correctamente');
    this._router.navigate(['mis-contactos']);
  }
  
}
