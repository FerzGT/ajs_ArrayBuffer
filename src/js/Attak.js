export default class attackCalc {
    constructor(distance) {
      this.attack = undefined;
      this.distance = distance;
      this.stoned = undefined;
    }
  
   
  set stoned(value) {
    this.getStoned = value;
  }

  get stoned() {
    return this.getStoned;
  }

  set attack(value) {
    this.basicAttack = value;
  }

  get attack() {
    if (this.basicAttack > 0) {
      if (this.distance > 0) {
        this.basicAttack = Math.round(this.basicAttack * (1 - (0.1 * (this.distance - 1))));

        if (this.stoned) {
          this.basicAttack = Math.round(this.basicAttack - Math.log2(this.distance) * 5);
        }
      }
    }

    return this.basicAttack;
  }
}