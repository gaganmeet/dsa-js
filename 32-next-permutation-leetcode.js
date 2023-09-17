/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let n = nums.length
    let breakpoint = -1
    // find breakpoint
    for(let i=n-2;i>-1;i--)
        if(nums[i]<nums[i+1]) {
            breakpoint = i
            break
        }
    // return reverse if array is sorted
    if(breakpoint === -1) {
        nums.reverse()
        return
    }
    // find minimun number that is greater than nums[breakpoint]
    let min = Number.MAX_VALUE
    let minIdx = -1
    for(let i=n-1;i>breakpoint;i--){
        if(nums[i]<min && nums[i]>nums[breakpoint]) {
            minIdx = i
            min = nums[i]
        }
    }
    // swap min with nums[breakpoint]
    let temp = nums[minIdx]
    nums[minIdx] = nums[breakpoint]
    nums[breakpoint] = temp
    ++breakpoint
    --n
    // reverse the array
    while(breakpoint<n) {
        let temp = nums[n]
        nums[n] = nums[breakpoint]
        nums[breakpoint] = temp
        breakpoint++
        n--
    }
};