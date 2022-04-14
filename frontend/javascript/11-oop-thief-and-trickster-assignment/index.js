const Player = require("../11-oop-steal-gold-cp/index");

class Thief extends Player {
  constructor(name) {
    super(name);
    this.job = "Thief";
  }
  
  robbedBlind() {
    if (this.getGold() < 10) {
      return "Aku terlalu miskin";
    } else {
      this.setGold(this.getGold() - 10);
      this.setStealChance(0.75);
    }
  }

  steal(player) {
    // super.steal(player);
    // if (player.job === "Trickster") {
    //   return player.distractionPurse(this);
    // }

    if (player.getGold() < 5) {
      return "Lawan terlalu miskin"
    } else {
      if (this.randomizer() >= this.getStealChance()) {
        player.setHasBeenRobbed(false);
        return "Gagal mencuri, coba lain kali";
      } else {
        player.setGold(player.getGold() - 5);
        player.setHasBeenRobbed(true);
        this.setGold(this.getGold() + 5);

        if (player.job === "Trickster") {
          return player.distractionPurse(this);
        }

        return "Berhasil mencuri 5 gold";
      }
    }
  }
}

class Trickster extends Player {
  constructor(name) {
    super(name);
    this.distractionPurseChance = 0.25;
    this.job = "Trickster";
  }

  setDistractionPurseChance(chance) {
    this.distractionPurseChance = chance;
  }

  getDistractionPurseChance() {
    return this.distractionPurseChance;
  }

  distractionPurse(player) {
    const rng = this.randomizer();
    
    if (rng >= this.distractionPurseChance) {
      return "Gagal mencuri balik";
    } else {
      if (player.gold < 10) {
        this.setGold(this.getGold() + player.getGold());
        player.setGold(0);
        return "Berhasil mencuri balik semua uang lawan";
      } else {
        this.setGold(this.getGold() + 10);
        player.setGold(player.getGold() - 10);
        return "Berhasil mencuri balik 10 gold";
      }
    }
  }

  steal(player) {
    // super.steal(player);
    // if (player.job === "Trickster") {
    //   return player.distractionPurse(this);
    // }

    if (player.getGold() < 5) {
      return "Lawan terlalu miskin"
    } else {
      if (this.randomizer() >= this.getStealChance()) {
        player.setHasBeenRobbed(false);
        return "Gagal mencuri, coba lain kali";
      } else {
        player.setGold(player.getGold() - 5);
        player.setHasBeenRobbed(true);
        this.setGold(this.getGold() + 5);

        if (player.job === "Trickster") {
          return player.distractionPurse(this);
        }
        
        return "Berhasil mencuri 5 gold";
      }
    }
  }
}

// Dilarang menghapus code dibawah ini!!!
module.exports = {
  Thief,
  Trickster,
};
