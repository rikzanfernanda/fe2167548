// Time Conversion
// - Problem Solving (Basic)
// - Difficulty: Easy

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */


// Full Problem: https://www.hackerrank.com/challenges/time-conversion/problem

function timeConversion(s) {
  let hour = s.slice(0, 2);
  let minute = s.slice(3, 5);
  let second = s.slice(6, 8);
  let ampm = s.slice(8, 10);

  if (ampm === 'AM') {
    if (hour === '12') {
      hour = '00';
    }
  } else {
    if (hour !== '12') {
      hour = parseInt(hour) + 12;
    }
  }

  return hour + ':' + minute + ':' + second;
}

function main() {
  //var s = readLine();
  var s = '07:05:45PM'; // override input
  var result = timeConversion(s);
  console.log(result);

}

main(); // execute program

module.exports = timeConversion