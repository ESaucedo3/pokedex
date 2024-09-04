import {sandboxPokemonService} from '../services/SandboxPokemonService.js';

export class SandboxPokemonController {
  constructor() {
    console.log('SandBoxPokemonController Active');
  }

  async catchPokemon() {
    await sandboxPokemonService.catchPokemon();
  }
}
