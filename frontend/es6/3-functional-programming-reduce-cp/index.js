/**
 * Jumlahkan semua elemen angka dalam sebuah array
 * Contoh:
 *  Input: [1, 1, 1, 5]
 *  Output: 8
 */

 const sumTotalArray = (numbers) => {
    return numbers.reduce((prev, curr) => prev + curr);
  };
  
  module.exports = sumTotalArray
