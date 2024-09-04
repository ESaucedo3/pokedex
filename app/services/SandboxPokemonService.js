import {AppState} from '../AppState.js';
import {api} from './AxiosService.js';

class SandboxPokemonService {
  async catchPokemon() {
    const caughtPokemon = AppState.activePokemon;
    const response = await api.post('api/pokemon', caughtPokemon);
    console.log(response);
  }
}

export const sandboxPokemonService = new SandboxPokemonService();
