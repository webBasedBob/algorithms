//2 strategies to handle colosions :
//  1. linear probing
//  2. separate chaining

class HashMap {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }
  hash(key) {
    let total = 0;
    const randomPrime = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * randomPrime + value) % this.keyMap.length;
    }
    return total;
  }
  set(key, value) {
    const hashKey = this.hash(key);
    if (this.keyMap[hashKey]) {
      this.keyMap[hashKey].push([key, value]);
    } else {
      this.keyMap[hashKey] = [[key, value]];
    }
  }
  get(key) {
    const hashKey = this.hash(key);
    let result;
    if (!this.keyMap[hashKey]) return result;
    for (let i = 0; i < this.keyMap[hashKey].length; i++) {
      if (this.keyMap[hashKey][i][0] === key) {
        result = this.keyMap[hashKey][i][1];
        break;
      }
    }
    return result;
  }
  keys() {
    let result = [];
    this.keyMap.forEach((entry) => {
      entry.forEach((subentry) => {
        result.push(subentry[0]);
      });
    });
    return result;
  }
  values() {
    let result = [];
    this.keyMap.forEach((entry) => {
      entry.forEach((subentry) => {
        result.push(subentry[1]);
      });
    });
    return result;
  }
}

const testHashMap = new HashMap(31);
testHashMap.set("porto", "cala");
testHashMap.set("meca", "nica");
testHashMap.set("meca", "nica");
console.log(testHashMap.get("porto"));
console.log(testHashMap.get("sdsdsdsds"));
console.log(testHashMap.keyMap);
console.log(testHashMap.keys());
console.log(testHashMap.values());
