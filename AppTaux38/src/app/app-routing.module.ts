import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VilleComponent} from "./Commun/ville/ville.component";
import {AjouteVComponent} from "./Commun/ajoute-v/ajoute-v.component";

const routes: Routes = [
  {path:"ville",component:VilleComponent},
  {path:"ajouter",component:AjouteVComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
