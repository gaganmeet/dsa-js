/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let dp = new Array(nums.length).fill(Infinity)
    dp[0] = 0
    for(let i = 0; i < nums.length; i++)
        for(let j = i+1; j<=nums[i]+i && j<nums.length; j++)
            dp[j] = Math.min(dp[j], dp[i] + 1)
    return dp[nums.length - 1]
};