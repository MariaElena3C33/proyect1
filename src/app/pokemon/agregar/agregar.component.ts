import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  constructor(private servicioPokemon: PokemonService) { }

  /*@Output() onPokemonAgreagado = new EventEmitter<Pokemon>();*/

  nuevo: Pokemon = {
    nombre: "",
    pc: 0
  }

  agregar(){
    this.servicioPokemon.agregarPokemon(this.nuevo);
    this.nuevo = {
      nombre: "",
      pc: 0
    }
  }
}
