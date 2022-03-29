/**
 * Carilah angka palindrome yang LEBIH BESAR dan TERDEKAT dari angka-angka dibawah ini
 * 
 * Misal:
 * - Jika angka pada parameter bernilai 90 maka angka palindrome terdekat adalah 99
 * - Jika angka pada parameter bernilai 102 maka angka palindrome terdekat adalah 111
 */

const isPalindrome = (num) => {
  if (num < 10) return false;

  let numStr = '' + num;
  let reversedNumStr = '';
  let temp = num;

  while (temp > 0) {
    reversedNumStr += temp % 10;
    temp = Math.floor(temp / 10);
  }

  return numStr === reversedNumStr;
}

function angkaPalindrome(num) {
  let temp = num;
  while (!isPalindrome(temp)) {
    temp++;
  }
  return temp;
}

console.log(angkaPalindrome(10)); //11
console.log(angkaPalindrome(17)); //22
console.log(angkaPalindrome(175)); //181

module.exports = angkaPalindrome