export class Pokemon {
  constructor(data) {
    this.name = data.name;
    this.nickname = data.nickname || 'Pokemon';
    this.img = data.img ?? data.sprites.front_default;
    this.backImg = data.backImg ? data.backImg : data.sprites.back_default;
    this.weight = data.weight;
    this.height = data.height;
    this.health = data.health || data.stats[0].base_stat;
    this.defense = data.defense || data.stats[2].base_stat;
    this.attack = data.attack || data.stats[1].base_stat;
    this.speed = data.speed || data.stats[5].base_stat;
    this.types = data.types;
    this.creatorId = data.creatorId;
  }

  static wildPokemonTemplate(pokemon) {
    return `<p onclick="app.WildPokemonController.getActivePokemon('${pokemon.name}')" class="wildin">🔴 ${pokemon.name}</p>`;
  }

  get myPokemonTemplate() {
    return `<div class="text-light bg-dark border border-2 border-info rounded mb-1">
              <p class="mb-0"><img src="${this.img}" alt="${this.name}" />${this.name}</p>
            </div>`;
  }

  get activePokemonTemplate() {
    return `<div class="d-flex justify-content-between align-items-center px-2">
                <h5>${this.name} | ${this.nickname}</h5>
                <p>No. 1</p>
              </div>
              <div class="row justify-content-center">
                <div class="col-3">
                  <img class="img-fluid" src="${this.img}" alt="${this.name}" />
                  <img class="img-fluid" src="${this.backImg}" alt="${this.name}" />
                </div>
              </div>
              <div class="card-body">
                <div class="row px-2">
                  <div class="mb-1">
                    ${this.attacktypes}
                  </div>
                  <div class="d-flex justify-content-between col-12">
                    <h5>Health</h5>
                    <p>${this.health} hp</p>
                  </div>

                  <div class="d-flex justify-content-between col-12">
                    <h5>Attack</h5>
                    <p>${this.attack} ap</p>
                  </div>

                  <div class="d-flex justify-content-between col-12">
                    <h5>Defense</h5>
                    <p>${this.defense} dp</p>
                  </div>

                  <div class="d-flex justify-content-between col-12">
                    <h5>Speed</h5>
                    <p>${this.speed} spd</p>
                  </div>

                  <div class="d-flex justify-content-between col-12">
                    <h5>Weight</h5>
                    <p>${this.weight} hg</p>
                  </div>

                  <div class="d-flex justify-content-between col-12">
                    <h5>Height</h5>
                    <p>${this.height} dm</p>
                  </div>
                  <div class="text-center">
                    <button onclick="app.SandboxPokemonController.catchPokemon()" type="button" class="btn btn-outline-dark rounded-pill">Catch Em!</button>
                  </div>
                </div>
              </div>`;
  }

  get attacktypes() {
    let typesContent = '';
    this.types.forEach((type) => (typesContent += `<button type="button" class="btn btn-outline-dark rounded-pill ms-2">${type.type.name}</button>`));
    return typesContent;
  }
}
