/*
* This solution to merge sorted arrays and will take O(n+k) space
* Space and Time complexity O(n+k)
* n is space for arr1 and k is the space for arr2
* Time complexity
* It needs to travers both arrays with sizes n and k so time complexity O(n+k) as well
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
        // If array item 2 is null and arrayItem1 has something so comparison will fail
        // so we need to check !arrayItem2
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


mergeTwoSortedArray([0,3,4,6], [4,6,30])

