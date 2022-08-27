var removeDuplicates = function(nums) {
    let counter = 1;
    for(let i=1; i<nums.length; i++) {
        if(nums[i] !== nums[i-1]) {
            nums[counter] = nums[i]
            counter++;
        }
    }
    return counter;
};

/*
Given an integer array nums sorted in non-decreasing order, remove the duplicates
in-place such that each unique element appears only once. The relative order
of the elements should be kept the same.

Inputs
Test Case 1
Input: nums = [1,1,2]
Output: 2, nums = [1,2,_] unique values
Test Case 2
Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_] unique values

Solution
Time O(n)
Space O(1)
 */
console.log(removeDuplicates([1,1,2]));