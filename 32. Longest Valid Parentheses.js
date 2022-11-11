var longestValidParentheses = function(s,e = 0, x = 0, y = 0) {
    

    for(let c of s) {
        if(c === '(') e++;
        else x++;
        if(e === x) y = Math.max(y, x*2);
        else if(x > e) e = x = 0;
    }

    e = x = 0;
    
    for(let i = s.length-1; i >= 0; i--) {
        if(s[i] === ')') x++;
        else e++;
        if(e === x) y = Math.max(y, e*2);
        else if(e > x) e = x = 0;
    }
    return y;
}