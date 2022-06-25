/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let leftSum = [nums[0]]
    let rightSum = new Array(nums.length)
    rightSum[nums.length-1] = nums[nums.length-1]
    for(let i=1;i<nums.length;i++){
        leftSum.push(nums[i]+leftSum[i-1])
    }
    for(let i=nums.length-2;i>-1;i--){
        rightSum[i] = nums[i]+rightSum[i+1]
    }
    let i = 0
    let j = nums.length-1
    while(i<nums.length){
        if(leftSum[i]==rightSum[i])
            return i
        i++
    }
    return -1
};