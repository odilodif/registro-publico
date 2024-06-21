import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponenteAComponent } from './components/componente-a/componente-a.component';
import { PersonaComponent } from './components/persona/persona.component';
import {FormsModule}  from '@angular/forms';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { ResultadoComponent } from './components/resultado/resultado.component'
@NgModule({
  declarations: [
    AppComponent,
    ComponenteAComponent,
    PersonaComponent,
    CalculadoraComponent,
    ResultadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
