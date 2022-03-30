// Breaking the Records
// - Problem Solving (Basic)
// - Difficulty: Easy

/*
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */


// Full Problem: https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem

function breakingRecords(scores) {
  let highest = scores[0];
  let lowest = scores[0];
  let highestCount = 0;
  let lowestCount = 0;

  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > highest) {
      highest = scores[i];
      highestCount++;
    } else if (scores[i] < lowest) {
      lowest = scores[i];
      lowestCount++;
    }
  }

  return [highestCount, lowestCount];
}

function main() {
  //     var n = parseInt(readLine());
  //     s = readLine().split(' ');
  //     s = s.map(Number);
  var scores = [10, 5, 20, 20, 4, 5, 2, 25, 1]; // override input
  var result = breakingRecords(scores);
  console.log(result.join(' ') + '\n')
  console.log(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]));

}

main(); // execute program

module.exports = breakingRecords