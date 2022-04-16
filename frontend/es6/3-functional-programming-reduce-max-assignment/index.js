/**
 * Cari nilai tertinggi dari array menggunakan reduce
 * Contoh:
 *  Input: [1, 1, 1, 5]
 *  Output: 5
 *
 * Catatan: Tidak boleh menggunakan perintah Math.max().
 */

const maxFromArray = (numbers) => {
  const max = numbers.reduce((prev, curr) => {
    return prev > curr ? prev : curr;
  });
  return max;
};

module.exports = maxFromArray