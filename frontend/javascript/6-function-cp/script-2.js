// Mengembalikan boolean untuk mengecek apakah teks palindrom
//
// contoh: 
// teks1 = hello
// teks2 = madam
// teks3 = kasur ini rusak
// hasil:
// teks1 dibalik menjadi olleh, maka balikan akan false
// teks2 dibalik sama menjadi madam, maka balikan akan true
// teks3 dibalik sama menjadi kasur ini rusak, maka balikan akan true

function reverseString(str) {
    let newStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}

function checkPalindrome(string) {
    return string.toLowerCase() === reverseString(string.toLowerCase()) ? `${string} dibalik menjadi ${reverseString(string)}, maka balikan akan true` : `${string} dibalik menjadi ${reverseString(string)}, maka balikan akan false`;
}

// masukan teks
// const string = prompt('Enter a string: ');

// cek
let teks1, teks2, teks3;
let string = 'Kodok';
teks1 = 'hello';
teks2 = 'madam';
teks3 = 'kasur ini rusak';

// memanggil fungsi palindrom
const value = checkPalindrome(string);

console.log(value);
console.log(checkPalindrome(teks1));
console.log(checkPalindrome(teks2));
console.log(checkPalindrome(teks3));