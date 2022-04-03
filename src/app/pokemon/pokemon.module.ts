import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonComponent } from './pokemon.component';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { ListaComponent } from './lista/lista.component';
import { AgregarComponent } from './agregar/agregar.component';



@NgModule({
  declarations: [
    PokemonComponent,
    MainComponent,
    ListaComponent,
    AgregarComponent
  ],
  exports: [
    MainComponent,
    PokemonComponent,
    ListaComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PokemonModule { }
