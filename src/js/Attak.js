export default class attackCalc {
    constructor(distance) {
      this.attack = undefined;
      this.distance = distance;
      this.stoned = undefined;
    }
  
    set stoned(value) {
      this._stoned = value;
    }
  
    get stoned() {
      return this._stoned;
    }
  
    get attack() {
      this._attack = Math.floor(attack * attackLineRatio);
    }
  
    set attack(attack) {
      let attackLineRatio = 1.1 - 0.1 * this.distance;
      let attackLogAdj = Math.log2(this.distance) * 5;
      if (this._stoned) {
        this._attack = Math.floor((attack * attackLineRatio) - attackLogAdj); 
      }
      else {
        return this._attack;  
      }
      return this._attack
    }
  }