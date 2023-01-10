/* 
1. Hash tables 
Hash tables 
 * objects in JavaScript
 * dictionary in Python
 * map in java

basket.grapes = 10000
key value pair
key - grapes
value  - 10000

Examples: md5, SHA-1, SHA-256
  * Hash functions are 1 way when any input given it generates result
    of the same length. 
  * We use Hash functions when we we store passwords in database, database stores 
    hashed result of the password and if user entered password generates the same result 
    from hash function then it is correct password.   
  * If INPUT to HASH function is the same then OUTPUT is the same
  For example: 
  INPUT = hello 
  OUTPUT = 43t43t54nt5nt4kt545tnknk
  INPUT = Hello
  OUTPUT = 76un7k6nu76nou76nuo7mnmmu7
  INPUT = hello 
  OUTPUT = 43t43t54nt5nt4kt545tnknk

Hash tables
basket.grapes = 10000
key(grapes) -> Hash function -> Output mapped to memory address where 10000 stored  
  
2. Collision when Hash function generates the same memory location address
to given input. To solve this issue we can use memory location as a Linked list
storage where 2 values under the same hash value will be stored as LinkedList

3. Map() and Set() in ES6
Difference between object and Map to store data. Map can take objects or arrays as key
but JS objects can get numbers or strings only not object types. 

Moreover, Map keeps insertion order.

const a = new Map();
const b = new Set(); // stores only keys it means unique values

*/

class Hashtable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash; // O(1) since there is small number of itration
  }

  set(key, value) {
    const address = this._hash(key)
    if (!this.data[address]) {
      this.data[address] = [];
    }  
    this.data[address].push([key, value]); // O(1)
    console.log(this.data)
  }

  get(key) {
    const address = this._hash(key)
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if(currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return null;
  }

  keys() {
    let keys = []
    for (let i = 0; i < this.data.length; i++) {
      let currentBucket = this.data[i];
      if(currentBucket) {{
          if(currentBucket.length > 1) {
            for (let i = 0; i < currentBucket.length; i++) {
              keys.push(currentBucket[i][0]);
            }
          } else {
            keys.push(currentBucket[0][0])
          }
        } 
      }  
    }
    console.log(keys);
  }
}
const hashTable = new Hashtable(3);
hashTable.set("grapes", 10000);
hashTable.set("apples", 7777);
hashTable.set("pink", 20000);
console.log(hashTable.get("grapes"));
console.log(hashTable.get("pink"));
console.log(hashTable.get("apples"));
hashTable.keys();

/* Drawbacks there is no guaranteed order
1. if we want to access keys then we need to itrate this.data.lengt
to get only 3 keys but if we had an array we would itrate 3 times. 

2. if data length 500 then we need to itrate 500 times even worse
3. Moreover, there is no order so it returns values in diffrent order. 
So when it comes to method like an keys then Objects are not the best Option  
*/

/* 
Linked List 




*/








