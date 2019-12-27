/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n == 1) return 1;
    if (n == 2) return 2;

    var i_1 = 2;
    var i_2 = 1;
    var way = 0;
    for (var i = 3; i <= n; i++) {
        way = i_1 + i_2;
        i_2 = i_1;
        i_1 = way;
    }

    return way;
};

console.log(climbStairs(3));
console.log(climbStairs(4));