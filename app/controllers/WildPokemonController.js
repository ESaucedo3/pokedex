import {AppState} from '../AppState.js';
import {Pokemon} from '../models/Pokemon.js';
import {wildPokemonService} from '../services/WildPokemonService.js';
import {Pop} from '../utils/Pop.js';
import {setHTML} from '../utils/Writer.js';

export class WildPokemonController {
  constructor() {
    console.log('WildPokemonController Active');
    this.getWildPokemon();
    AppState.on('wildPokemon', this.drawWildPokemon);
    AppState.on('activePokemon', this.drawActivePokemon);
  }

  async getWildPokemon() {
    try {
      await wildPokemonService.getWildPokemon();
    } catch (e) {
      Pop.error(e);
      console.error(e);
    }
  }

  async getActivePokemon(pokemonName) {
    try {
      await wildPokemonService.getActivePokemon(pokemonName);
    } catch (e) {
      Pop.error(e);
      console.error(e);
    }
  }

  drawWildPokemon() {
    const pokemons = AppState.wildPokemon;
    let wildPokemonContent = '';
    pokemons.forEach((pokemon) => (wildPokemonContent += Pokemon.wildPokemonTemplate(pokemon)));
    setHTML('wild-pokemon', wildPokemonContent);
  }

  drawActivePokemon() {
    setHTML('active-pokemon', AppState.activePokemon.activePokemonTemplate);
  }
}
