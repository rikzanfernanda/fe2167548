/**
 * Tampilkan pasang huruf besar dari semua huruf kecil yang ada pada array
 
 * Contoh 
 *  input: ['a', 'b', 'c', 'd']
 *  output: [ {'a': 'A'}, {'b': 'B'}, {'D': 'c'}, {'d': 'D'}]
 * 
 */

const lowerToUpperMap = (array) => {
  return array.map(i => {
    return {
      [i]: i.toUpperCase()
    }
  })
};

module.exports = lowerToUpperMap
