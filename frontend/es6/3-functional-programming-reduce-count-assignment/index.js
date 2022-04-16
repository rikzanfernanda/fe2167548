/**
 * Hitung berapa banyak pengulangan angka dari array berikut dan kembalikan dalam bentuk key-value
 * Contoh:
 *  Input: [1, 1, 1, 5, 5, 10, 9]
 *  Output: {1: 3, 5: 2, 10: 1, 9: 1}
 *
 */

const countRepetition = (numbers) => {
  const repetition = numbers.reduce((acc, curr) => {
    return {
      ...acc,
      [curr]: acc[curr] ? acc[curr] + 1 : 1
    }
  }, 0);
  return repetition;
};

module.exports = countRepetition