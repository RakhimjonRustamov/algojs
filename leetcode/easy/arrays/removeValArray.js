function removeElement(nums, val) {
    let elementCounter = 0;
    for(let i=0; i<nums.length; i++) {
        if(nums[i] !== val) {
            nums[elementCounter] = nums[i];
            elementCounter++;
        }
    }

    console.log(nums)
    return elementCounter;
}

/*
Given an integer array nums and an integer val, remove all occurrences of val in nums in-place.
The relative order of the elements may be changed.

Test Case 1
Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores).

Test case 2
Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5, nums = [ 0, 1, 3, 0, 4,_,_,_]
*/

/*
Solution
Time O(n)
Space O(1)
*/

console.log(removeElement([0,1,2,2,3,0,4,2],2));