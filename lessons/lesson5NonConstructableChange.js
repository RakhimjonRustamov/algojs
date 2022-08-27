/*

NonConstructable Change
Set
U = { 1 }
Variable
V = 1
Change
C = 1
In this case based on pattern [1,1,2,3,5,7,22] we can analyse
V > C+1 return C+1
V <= C+! continue C+V

Solution:
Time: O(nlogn) since we sort
Space: O(1)


const nonConstructable = function(coins) {
    let change = 0
    coins.sort((a,b) => a-b);
    for(let value of coins) {
        if (value > change + 1) {
            change = change + 1;
            break;
        }
        if (value <= change + 1) {
            change = change + value;
        }
    }

    return change;
}

Solution 2:
Time: O(nlogn) since we sort
Space: O(1)
const nonConstructable = function(coins) {
    let change = 0
    coins.sort((a,b) => a-b);
    for(let value of coins) {
        if (value > change + 1) {
          return change + 1;
        }
        change = change + value;
    }

    return change + 1;
}

*  */

const nonConstructable = function(coins) {
    let change = 0
    coins.sort((a,b) => a-b);
    for(let value of coins) {
        if (value > change + 1) {
          return change + 1;
        }
        change = change + value;
    }

    return change + 1;
}

module.exports = nonConstructable;