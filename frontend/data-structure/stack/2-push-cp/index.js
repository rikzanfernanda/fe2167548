// Dari inisiasi stack dengan jumlah maksimal elemen 10, cobalah implementasikan operasi push.

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
}
