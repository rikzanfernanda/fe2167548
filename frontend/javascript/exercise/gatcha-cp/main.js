/**
 * Kali ini kamu diminta untuk membuat sebuah game gatcha dengan ketentuan berikut:
 * - diberikan sebuah variable button yang akan mengenerate angka random 1 - 5
 * - jika mendapat angaka 1 maka akan menampilkan "coba lagi ya"
 * - jika mendapat angaka 2 maka akan menampilkan "selamat kamu mendapatkan kupon sebanyak 5"
 * - jika mendapat angaka 3 maka akan menampilkan "selamat kamu mendapatkan kupon sebanyak 15"
 * - jika mendapat angaka 4 maka akan menampilkan "selamat kamu mendapatkan kupon sebanyak 50"
 * - jika mendapat angaka 5 maka akan menampilkan "selamat kamu mendapatkan kupon sebanyak 100"
 * Buatlah Pseudocode beserta codenya menggunakan conditional "switch"
 */

// PSEUDOCODE:
/*
FUNCTION gatcha(button):
  SWITCH button:
    CASE 1:
      RETURN "coba lagi ya"
    CASE 2:
      RETURN "selamat kamu mendapatkan kupon sebanyak 5"
    CASE 3:
      RETURN "selamat kamu mendapatkan kupon sebanyak 15"
    CASE 4:
      RETURN "selamat kamu mendapatkan kupon sebanyak 50"
    CASE 5:
      RETURN "selamat kamu mendapatkan kupon sebanyak 100"
    DEFAULT:
      RETURN "coba lagi ya"
  END SWITCH
END FUNCTION
*/

function gatcha(button) {
  switch (button) {
    case 1:
      return 'coba lagi ya';
    case 2:
      return 'selamat kamu mendapatkan kupon sebanyak 5';
    case 3:
      return 'selamat kamu mendapatkan kupon sebanyak 15';
    case 4:
      return 'selamat kamu mendapatkan kupon sebanyak 50';
    case 5:
      return 'selamat kamu mendapatkan kupon sebanyak 100';
    default:
      return 'coba lagi ya';
  }
}

// Create variable button here
let button = Math.floor(Math.random() * 5) + 1;

console.log(gatcha(button))

module.exports = gatcha
