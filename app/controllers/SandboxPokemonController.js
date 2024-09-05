import {AppState} from '../AppState.js';
import {sandboxPokemonService} from '../services/SandboxPokemonService.js';
import {setHTML} from '../utils/Writer.js';

export class SandboxPokemonController {
  constructor() {
    AppState.on('user', this.getMyPokemon);
    AppState.on('myPokemon', this.drawMyPokemon);
  }

  async getMyPokemon() {
    await sandboxPokemonService.getMyPokemon();
  }

  async catchPokemon() {
    await sandboxPokemonService.catchPokemon();
  }

  drawMyPokemon() {
    const pokemons = AppState.myPokemon;
    const pokemonCountElem = document.getElementById('pokemon-count');
    pokemonCountElem.textContent = `My Pokemon: ${pokemons.length}`;
    let pokemonContent = '';
    pokemons.forEach((pokemon) => (pokemonContent += pokemon.myPokemonTemplate));
    setHTML('my-pokemon', pokemonContent);
  }
}
