/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length===1) return nums[0]
    function robcheck(nums){
        let dp = new Array(nums.length)
        dp[0] = nums[0]
        for(let i=1;i<nums.length;i++){
            if(i===1) dp[i] = Math.max(nums[0], nums[1])
            else dp[i] = Math.max(dp[i-2]+nums[i], dp[i-1])
        }
        return dp[nums.length-1]
    }
    let res = Math.max(robcheck(nums.slice(1, nums.length)), robcheck(nums.slice(0, nums.length-1)))
    return res
};