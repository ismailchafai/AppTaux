import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, provideHttpClient, withFetch} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VilleComponent } from './Commun/ville/ville.component';
import { VilleService } from './service/ville.service';
import { NavbarComponent } from './Commun/navbar/navbar.component';
import { AjouteVComponent } from './Commun/ajoute-v/ajoute-v.component'
import {FormsModule} from "@angular/forms";

// Assurez-vous d'importer votre service

@NgModule({
  declarations: [
    AppComponent,
    VilleComponent,
    NavbarComponent,
    AjouteVComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, // Importez HttpClientModule ici
  ],
  providers: [
    VilleService,
    provideHttpClient(withFetch()),// Ajoutez votre service à la liste des fournisseurs
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
