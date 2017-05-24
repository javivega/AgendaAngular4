import { Component } from '@angular/core';


//seguir desde min 70 sesion 2 dia 1
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  //Defino en el padre el manejador que se ejecutara cuando se de el evento emitido por el hijo
  mostrarContactoSeleccionado(contacto: string): void {
    alert(contacto);
  }
}
