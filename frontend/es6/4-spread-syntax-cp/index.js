/**
 * Buatlah sebuah fungsi yang menerima berapapun jumlah argumen dalam bentuk angka, kemudian mengembalikan nilai maksimal dari semua angka tersebut.
 *
 * max(1, 2, 3, 4, 12, 3, 4) output: 12
 * max(1, 2, 5) output: 5
 * max(1) output: 1
 *
 * Dilarang menggunakan Math.max
 */
const max = (...args) => {
  // let max = 0;
  // for (let i = 0; i < args.length; i++) {
  //   (args[i] > max) ? max = args[i]: max;
  // }
  // return max;
  //or
  return args.reduce((acc, curr) => {
    return acc > curr ? acc : curr;
  });
};

module.exports = max