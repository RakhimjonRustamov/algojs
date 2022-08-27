/*
 Lesson 1
    Two sum

    Return indexes of two numbers in array that sum up target value
    Consider array has one solution
    console.log(twoSum([2,7,11,15], 9));

    Solution 1
    using javascript object;
    Time: O(n) and space O(n)

    var twoSum = function(nums, target) {
    let cache = {};
    cache[nums[0]] = 0;

    for(let i=1; i<nums.length; i++) {
        if(cache[target - nums[i]] !== undefined) {
            return [cache[target - nums[i]], i]
        } else {
            cache[nums[i]] = i;
        }
    }
    return [];
    };

    Solution 2
    using Map();
    Time: O(n) and space O(n)
    var twoSum = function(nums, target) {
        let cache = new Map();
        cache.set(nums[0], 0);

        for(let i=1; i<nums.length; i++) {
            if(cache.has(target - nums[i])) {
                return [cache.get(target - nums[i]), i]
            } else {
                cache.set(nums[i], i);
            }
        }
        return [];
    };

    Solution 3
    Time: O(nlogn) for sort and space O(1) since we don't store value
    var twoSum = function(nums, target) {
        nums.sort();
        let left = 0;
        let right = nums.length - 1;

        while(left < right) {
            let currentSum = nums[left] + nums[right];
            if(currentSum === target) {
                return [left, right];
            } else if(currentSum < target) {
                left++;
            } else if(currentSum > target) {
                right--;
            }
        }
        return [];
    };

    Lesson 2

*/

const twoSum = function(nums, target) {
    let cache = {};
    cache[nums[0]] = 0;

    for(let i=1; i<nums.length; i++) {
        if(cache[target - nums[i]] !== undefined) {
            return [cache[target - nums[i]], i]
        } else {
            cache[nums[i]] = i;
        }
    }
    return [];
};

module.exports = twoSum;



