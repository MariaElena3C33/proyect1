import { Injectable } from "@angular/core";
import { Pokemon } from './pokemon';


@Injectable({
    providedIn: 'root'
})
export class PokemonService{
    private pokemonList: Pokemon[]=[
        {
            nombre: 'charmander',
            pc: 500
        },
        {
            nombre: 'squirtle',
            pc: 650
        }
    ];

    get obtenerLista(){
        return [...this.pokemonList]; /*forma de separar este elemento de alguna otra clase y obtiene su propio valor*/
    }

    constructor(){}

    agregarPokemon(nuevoPokemon: Pokemon){
        this.pokemonList.push(nuevoPokemon);
    }
}