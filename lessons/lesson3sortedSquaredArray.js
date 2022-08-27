/*
Lesson 3
Sorted Squared Array
Sorted Squared Array can contain negative values

Solution:  1 Brute force
Time: O(nlogn) sort function | Space: O(n) storing result array;
const sortedSquaredArray = function(array) {
    let result = [];
    let idx = 0;
    for(let i of array) {
        result[idx] = i * i;
        idx++;
    }
    result.sort((a,b) => a-b);
    return result;
}

Solution 2
Time O(n) and Space O(n) storing result;
const sortedSquaredArray = function(array) {
    let start = 0;
    let end = array.length - 1;
    let counter = array.length - 1;
    let result = [];
    while (start <= end) {
        if (Math.abs(array[start]) < Math.abs(array[end])) {
            result[counter] = Math.pow(array[end],2);
            end--;
        } else if (Math.abs(array[start]) > Math.abs(array[end])) {
            result[counter] = Math.pow(array[start],2);
            start++;
        } else if (Math.abs(array[start]) === Math.abs(array[end])) {
            result[counter] = Math.pow(array[start], 2);
            start++;
        }
        counter--;
    }
    return result;
}

Solution 3
Time O(n) and Space O(n) storing result;
const sortedSquaredArray = function(array) {
    let left = 0;
    let right = array.length - 1;
    let result = [];

    for (let i=array.length-1; i>=0; i--) {
        if (Math.abs(array[left]) < Math.abs(array[right])) {
            result[i] = Math.pow(array[right], 2)
            right--;
        } else {
            result[i] = Math.pow(array[left],2);
            left++;
        }
    }
    return result;
}

* */

const sortedSquaredArray = function(array) {
    let left = 0;
    let right = array.length - 1;
    let result = [];

    for (let i=array.length-1; i>=0; i--) {
        if (Math.abs(array[left]) < Math.abs(array[right])) {
            result[i] = Math.pow(array[right], 2)
            right--;
        } else {
            result[i] = Math.pow(array[left],2);
            left++;
        }
    }
    return result;
}

// Lesson 3
//console.log(sortedSquaredArray([-7,-5,-4,3,6,8,9]));

module.exports = sortedSquaredArray;