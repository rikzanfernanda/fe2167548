/**
 * Kali ini kalian akan mengimplementasikan Method Chaining pada OOP dengan membuat sebuah Advance Calculator.
 * Class Calculator memiliki properti operand
 * Terdapat beberapa method yang perlu kalian buat diantaranya:
 * - `add` : untuk menambahkan operand yang diterima
 * - `subtract` : untuk mengurangi operand yang diterima
 * - `multiply` : untuk mengaklikan operand yang diterima
 * - `divide` : untuk membagi operand yang diterima
 * - `square` : untuk mencari pangkat dari operand yang diterima
 * - `squareRoot` : untuk mencari akar dari operand yang diterima
 * setiap method yang dibuat akan menerima argumen berupa integer
 */

class Calculator {
  constructor (operand) {
    this.operand = operand;
  }
  
  add (number) {
    this.operand += number;
    return this;
  }

  subtract (number) {
    this.operand -= number;
    return this;
  }

  multiply (number) {
    this.operand *= number;
    return this;
  }

  divide (number) {
    this.operand /= number;
    return this;
  }

  square (number) {
    this.operand = Math.pow(this.operand, number);
    return this;
  }

  squareRoot (number) {
    this.operand = Math.sqrt(this.operand);
    return this;
  }
}

module.exports = Calculator
