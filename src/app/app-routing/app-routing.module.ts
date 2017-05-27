import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { MisContactosComponent } from '../mis-contactos/mis-contactos.component';
import { NuevoContactoComponent } from '../nuevo-contacto/nuevo-contacto.component';

const routes: Routes = [
  {
    path: "mis-contactos",
    component: MisContactosComponent
  },
  {
    path: "nuevo-contacto",
    component: NuevoContactoComponent
  },
  {
    path: "**",
    pathMatch: "full",
    redirectTo: '/mis-contactos'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
