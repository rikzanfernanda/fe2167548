// Pengecekan angka positif, negatif, atau 0 dengan nested if

// Masukan suatu angka
const number = parseInt(prompt("Masukan bilangan: "));

// cek
// let number = -1;

// TODO: answer here
if (number > 0) {
    console.log("bilangan positif");
} else if (number == 0) {
    console.log("bilangan = 0");
} else {
    console.log("bilangan negatif");
}
