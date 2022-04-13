// # Thief and Trickster

// > Kalian tidak akan bisa mengerjakan study-case ini apabila belum menyelesaikan steal gold assignment

// Setelah kalian menyeleseikan permainan apa soal sebelumnya. sekarang saatnya kita tambahkan tantangan agar permainan menjadi lebih menarik.

// Terdapat class `Thief` dan `Trickster` yang merupakan extends dari class `Player`. kalian diminta untuk melengkapi class tersebut dengan ketentuan dibawah ini.

// ## Thief

// 1. Class `Thief` yang memiliki properti tambahan job dengan value thief, dan skill tambahan `robbedBlind` berupa function.

// 2. `robbedBlind` memiliki efek mengubah stealChance menjadi 75% dengan membayar 10 gold. 
//    - Apabila gold player (sendiri) kurang dari 10 gold, kembalikan message "Aku terlalu miskin"

// ## Trickster

// 1. Class `Trickster` yang memiliki tambahan job dengan value thief, dan skill `distractionPurse` berupa function.

// 2. `distractionPurse` memiliki efek yaitu, ketika class ini kecurian uang, dia memiliki 25% chance untuk mencuri balik 10 gold.
//    - Apabila total uang lawan kurang dari 10 gold, curi semua uang lawan. Kembalikan message "Berhasil mencuri balik semua uang lawan"
//    - Apabila berhasil uang dan uang lawan lebih dari 10 gold, kembalikan message "Berhasil mencuri balik 10 gold"
//    - Apabila gagal, kembalikan message "Gagal mencuri balik"

// 3. Tedapat getter dan setter untuk mengubah value `DistractionPurse` chance yang dimiliki

// Copy semua logic steal yang sudah kamu tulis di study case sebelumnya dan tambahkan logic untuk mengecek job dari korban pencurian. Apabila korbannya adalah Trickster, maka jalankan skill `distractionPurse` tersebut.

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
    super.steal(player);
    if (player.job === "Trickster") {
      return player.distractionPurse(this);
    }
    // if (player.job === 'Trickster') {
    //   return player.distractionPurse(this);
    // } else {
    //   super.steal(player);
    // }
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
    console.log(this.getGold());
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
    super.steal(player);
    if (player.job === "Trickster") {
      return player.distractionPurse(this);
    }
  }
}

// Dilarang menghapus code dibawah ini!!!
module.exports = {
  Thief,
  Trickster,
};
