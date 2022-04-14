/**
 * Tampilkan tipe data dari setiap elemen array
 * Input: ["A", 3, [2]]
 * Outout: ["string", "number", "object"]
 *
 * Hint:
 * - Untuk pengecekan tipe data kalian dapat menggunakan typeof
 * - Pastikan menggunakan for-of untuk perulangan
 */

const convertElementToType = (array) => {
  let result = [];

  for (const i of array) {
    result.push(typeof i);
  }

  return result;
};

module.exports = convertElementToType