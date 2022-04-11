class Player {
  constructor(name) {
    this.name = name;
    this.gold = 50;
    this.stealChance = 0.25;
    this.hasBeenRobbed = false;
  }


  getGold() {
    return this.gold;
  }

  setGold(gold) {
    this.gold = gold;
  }

  getStealChance() {
    return this.stealChance;
  }

  setStealChance(chance) {
    this.stealChance = chance;
  }

  getHasBeenRobbed() {
    return this.hasBeenRobbed;
  }
  
  setHasBeenRobbed(status) {
    this.hasBeenRobbed = status;
  }
  
  randomizer() {
    return +Math.random().toFixed(2);
  }
  
  steal(player) {
    // if (this.randomizer() > this.getStealChance()) {
    //   this.setHasBeenRobbed(true);
    //   return "Gagal mencuri, coba lain kali";
    // } else if (player.getGold() < 5) {
    //   return "Lawan terlalu miskin";
    // } else {
    //   this.setGold(this.getGold() + 5);
    //   player.setGold(player.getGold() - 5);
    //   return "Berhasil mencuri 5 gold";
    // }
  }
}

const p1 = new Player("Fauzan");
const p2 = new Player("Tegar");

console.log('Jumlah gold Player 1: ' + p1.getGold())
console.log('Jumlah gold Player 2: ' + p2.getGold())
console.log(p1.steal(p2));
console.log('Total gold Player 1: ' + p1.getGold())
console.log('Total gold Player 2: ' + p2.getGold())

module.exports = Player;
