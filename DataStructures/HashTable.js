class HashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = size;
    }

    hash(key) {
        let total = 0;
        for (let i=0; i<key.length; i++) {
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }

    set(key, value) {
        const index = this.hash(key);
        // this.table[index] = value;
        // to avoid collision
        if (!this.table[index]) {
            this.table[index] = [[key, value]];
        } else {
            const sameKeyItem = this.table[index].find(item => item[0] === key);
            if (sameKeyItem) {
                sameKeyItem[1] = value;
            } else {
                this.table[index].push([key, value]);
            }
        }
    }

    get(key) {
        const index = this.hash(key);
        // return this.table[index];
        // to avoid collision
        if (this.table[index]) {
            const sameKeyItem = this.table[index].find(item => item[0] === key);
            if (sameKeyItem) {
                return sameKeyItem[1];
            }
        }
        return undefined;
    }

    remove(key) {
        const index = this.hash(key);
        // this.table[index] = undefined;
        // to avoid collision
        if (this.table[index]) {
            const sameKeyItem = this.table[index].find(item => item[0] === key);
            if (sameKeyItem) {
                this.table[index].splice(this.table[index].indexOf(sameKeyItem), 1);
            }
        }
    }

    display() {
        for (let i=0; i<this.table.length; i++) {
            if (this.table[i]) {
                console.log(i, this.table[i])
            }
        }
    }
}

const table = new HashTable(50);