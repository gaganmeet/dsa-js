/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    if(n===1) return true
    for(let i=1;i<=Math.sqrt(n);i++){
        if(n===4**i) return true
    }
    return false
};