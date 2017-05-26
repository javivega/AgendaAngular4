import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ContactoService } from './contacto.service';
import { AppComponent } from './app.component';
import { ListaContactosComponent } from './lista-contactos/lista-contactos.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaContactosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ContactoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
