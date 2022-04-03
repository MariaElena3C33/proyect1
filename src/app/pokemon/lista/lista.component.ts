import { Component } from "@angular/core";
import { PokemonService } from '../pokemon.service';

@Component({
    selector: 'app-lista',
    templateUrl: './lista.component.html'
})
export class ListaComponent{

    /*@Input() listaPokemon: Pokemon[]=[];*/
    constructor(private servicioPokemon: PokemonService){

    }

    get listaPokemon(){
        return this,this.servicioPokemon.obtenerLista;
    }

}