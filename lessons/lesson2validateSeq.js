/*
Lesson 2
Validate sub sequence

Validate Sequence is part of array
console.log(validateSequence([5,1,22,25,6,-1,8,10], [1,6,-1,10])); // true
console.log(validateSequence([5,1,22,25,6,-1,8,10], [1,6,-1,11])); // false

Solution 1
Time: O(n) and Space O(1)
const validateSequence = function (array, sequence) {
    let arrIdx = 0;
    let seqIdx = 0;

    while(arrIdx < array.length && seqIdx < sequence.length) {
        if(array[arrIdx] === sequence[seqIdx]) {
            seqIdx++;
        }
        arrIdx++;
    }

    return seqIdx === sequence.length;
}

Solution 2
Time: O(n) and Space O(1)
const validateSequence = function (array, sequence) {
    let seqIdx = 0;

    for(let value of array) {
        if(seqIdx === sequence.length)
            return true
        if(value === sequence[seqIdx]) {
            seqIdx++;
        }
    }

    return seqIdx === sequence.length;
}


*/

const validateSequence = function (array, sequence) {
    let seqIdx = 0;

    for(let value of array) {
        if(seqIdx === sequence.length)
            return true
        if(value === sequence[seqIdx]) {
            seqIdx++;
        }
    }

    return seqIdx === sequence.length;
}

module.exports = validateSequence;