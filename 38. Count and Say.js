var countAndSay = function(n) {
    return n == 1 ? "1" : ["", ...countAndSay(n-1).match(/(.)\1*/g)].reduce((s, x) => s + x.length + x[0]);
};