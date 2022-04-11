// Buatlah callback yang memenuhi function call di line 29

// function ini menduplikasi tiap karakter pada sebuah string
// contoh: hehe => hheehhee
function doubleChars(str, num) {
  return str.split('').map(function(char) {
    return char.repeat(num);
  }).join('');
}

// function ini mengulang pengaplikasian callback pada str sejumlah num
function repeat(str, num, cb) {
  return cb(str, num);
}

console.log(repeat("triple", 4, doubleChars)); // ttttrrrriiiipppplllleeee
