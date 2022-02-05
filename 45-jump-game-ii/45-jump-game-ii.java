class Solution {
    public int jump(int[] nums) {
        int[] dp = new int[nums.length];
        Arrays.fill(dp, 100000000);
        dp[0]=0;
        for(int i=0;i<nums.length;i++) {
            //System.out.println(dp[i]);
            for(int j=i+1;j<=nums[i]+i&&j<nums.length;j++) {
                dp[j] = Math.min(dp[j], dp[i]+1) ;
            }
        }
        //for(int num: dp) System.out.println(num);
        return dp[nums.length-1];
    }
}