class Solution {
    public int climbStairs(int n) {
        int[] dp = new int[n+1];
        dp[0] = 1;
        for(int i=1;i<=n;i++){
            if(i-2>=0) dp[i]+=dp[i-2];
            //if(i-3>=0) dp[i]+=dp[i-3];
            dp[i]+=dp[i-1];
        }
        return dp[n];
    }
}