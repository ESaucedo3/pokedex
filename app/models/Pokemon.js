export class Pokemon {
  constructor(data) {
    // FIXME data.whatever will need to be changed since their api could potentially name it something else
    this.name = data.name;
    this.nickname = data.nickname;
    this.img = data.img;
    this.backImg = data.backImg;
    this.weight = data.weight;
    this.height = data.height;
    this.health = data.health;
    this.defense = data.defense;
    this.attack = data.attack;
    this.speed = data.speed;
    this.types = data.types;
    this.creatorId = data.creatorId;
  }
}
