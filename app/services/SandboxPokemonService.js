import {AppState} from '../AppState.js';
import {Pokemon} from '../models/Pokemon.js';
import {api} from './AxiosService.js';

class SandboxPokemonService {
  async getMyPokemon() {
    const response = await api.get('api/pokemon');
    const pokemons = response.data.map((pokemonData) => new Pokemon(pokemonData));
    AppState.myPokemon = pokemons;
  }
  async catchPokemon() {
    const caughtPokemon = AppState.activePokemon;
    const response = await api.post('api/pokemon', caughtPokemon);
    const pokemon = new Pokemon(response.data);
    AppState.myPokemon.push(pokemon);
  }
}

export const sandboxPokemonService = new SandboxPokemonService();
