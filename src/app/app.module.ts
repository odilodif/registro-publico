import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
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
=======
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { RegistropublicoComponent } from './pages/registropublico/registropublico.component';
import { ModuleregistropublicoModule } from './moduleregistropublico/moduleregistropublico.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RegistropublicoComponent
>>>>>>> cd4fc20 (first commit2)
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    FormsModule
  ],
  providers: [
    provideClientHydration()
=======
    HttpClientModule,
    ModuleregistropublicoModule,   
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
>>>>>>> cd4fc20 (first commit2)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
