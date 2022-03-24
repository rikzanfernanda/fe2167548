// Mengembalikan teks yang berkebalikan
//
// contoh: 
// teks = hello world
// hasil:
// dlrow olleh

function reverseString(str) {
    // return str.split("").reverse().join("");

    let newStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}

// take input from the user
// const string = prompt('Masukan teks: ');

// cek
const string = 'hello world';
const result = reverseString(string);
console.log(result);