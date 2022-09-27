/*
* This solution to merge sorted arrays and will take O(n+k) space
* Space and Time complexity O(n+k)
* If the first array less than expected length then it fails
* Both should have the same size
* */


function mergeTwoSortedArray(arr1, arr2) {
    let idx1 = 1;
    let idx2 = 1;
    let arrayItem1 = arr1[0];
    let arrayItem2 = arr2[0];
    let merged = [];

    // Check input
    if (arr1.length === 0) {
        return arr2;
    }

    if (arr2.length === 0) {
        return arr1;
    }

    while (arrayItem1 || arrayItem2) {
        console.log(arrayItem1, arrayItem2);
        if (!arrayItem2 || arrayItem1 < arrayItem2) {
            merged.push(arrayItem1);
            arrayItem1 = arr1[idx1];
            idx1++;
        } else {
            merged.push(arrayItem2);
            arrayItem2 = arr2[idx2];
            idx2++;
        }
    }

    console.log(merged);
    return merged;

}


mergeTwoSortedArray([0,3,4], [4,6,30])

