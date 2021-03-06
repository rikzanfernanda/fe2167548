// Buatlah callback yang memenuhi function call di line 29

// function ini menduplikasi tiap karakter pada sebuah string
// contoh: hehe => hheehhee
function doubleChars(str) {
  return str.split('').map(function(char) {
    return char + char;
  }).join('');
}

// function ini mengulang pengaplikasian callback pada str sejumlah num
function repeat(str, num, cb) {
  for (let i = 0; i < num; i++) {
    str = cb(str);
  }
  return str;
}

console.log(repeat("triple", 2, doubleChars)); // ttttrrrriiiipppplllleeee

module.exports = {
  doubleChars,
  repeat
}