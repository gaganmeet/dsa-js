/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = 10000000
    let max = 0
    for(let price of prices){
        if(price<min) min = price
        else if(price-min>max) max = price-min
    }
    return max
};