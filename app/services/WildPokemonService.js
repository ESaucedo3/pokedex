import {AppState} from '../AppState.js';
import {Pokemon} from '../models/Pokemon.js';
import {pokeApi} from './AxiosService.js';

class WildPokemonService {
  async getActivePokemon(pokemonName) {
    const response = await pokeApi.get(`pokemon/${pokemonName}`);
    const newPokemon = new Pokemon(response.data);
    AppState.activePokemon = newPokemon;
  }
  async getWildPokemon() {
    const response = await pokeApi.get('pokemon?limit=151');
    AppState.wildPokemon = response.data.results;
  }
}

export const wildPokemonService = new WildPokemonService();
