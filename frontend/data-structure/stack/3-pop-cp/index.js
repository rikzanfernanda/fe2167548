// Dari inisiasi stack dengan jumlah maksimal elemen 10, cobalah implementasikan operasi pop.

module.exports = class Stack {
    constructor() {
        this.data = [];
        this.top = -1;
        this.size = 10;
    }

    push(elemen) {
        if (this.top < this.size - 1) {
            this.top++;
            return this.data.push(elemen);
        } else {
            throw new Error('stack overflow');
        }
    }

    pop() {
        if (this.top >= 0) {
            this.top--;
            return this.data.pop();
        } else {
            throw new Error('stack underflow');
        }
    }
}
