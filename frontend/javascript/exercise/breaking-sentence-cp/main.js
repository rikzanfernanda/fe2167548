/**
 * Kali ini tugas kamu adalah memisahkan setiap kata dalam kalimat. 
 * gunakannlah built-in function dan cari panjang dari setiap kata tersebut.
 */

var word = 'wow JavaScript is so cool and i will become frontend developer';
var exampleFirstWord = word.substring(0, 3);

let firstWordLength = exampleFirstWord.length;
let secondWord = word.substring(4, 14); // 'JavaScript'
let secondWordLength = secondWord.length;
let thirdWord = word.substring(15, 17); // 'is'
let thirdWordLength = thirdWord.length; 
let fourthWord = word.substring(18, 20); // 'so'
let fourthWordLength = fourthWord.length;
let fifthWord = word.substring(21, 25); // cool
let fifthWordLength = fifthWord.length;
let sixthWord = word.substring(26, 29); // 'and'
let sixthWordLength = sixthWord.length;
let seventhWord = word.substring(30, 31); // 'i'
let seventhWordLength = seventhWord.length;
let eighthWord = word.substring(32, 36); // 'will'
let eighthWordLength = eighthWord.length;
let ninthWord = word.substring(37, 43); // 'become'
let ninthWordLength = ninthWord.length;
let tenthWord = word.substring(44, 52); // 'frontend'
let tenthWordLength = tenthWord.length;
let eleventhWord = word.substring(53, 62); // 'developer'
let eleventhWordLength = eleventhWord.length;

console.log('First Word: ' + exampleFirstWord + ', with length: ' + firstWordLength);
console.log('Second Word: ' + secondWord + ', with length: ' + secondWordLength);
console.log('Third Word: ' + thirdWord + ', with length: ' + thirdWordLength);
console.log('Fourth Word: ' + fourthWord + ', with length: ' + fourthWordLength);
console.log('Fifth Word: ' + fifthWord + ', with length: ' + fifthWordLength);
console.log('Sixth Word: ' + sixthWord + ', with length: ' + sixthWordLength);
console.log('Seventh Word: ' + seventhWord + ', with length: ' + seventhWordLength);
console.log('Eighth Word: ' + eighthWord + ', with length: ' + eighthWordLength);
console.log('Ninth Word: ' + ninthWord + ', with length: ' + ninthWordLength);
console.log('Tenth Word: ' + tenthWord + ', with length: ' + tenthWordLength);
console.log('Eleventh Word: ' + eleventhWord + ', with length: ' + eleventhWordLength);