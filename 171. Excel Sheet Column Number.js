const titleToNumber = function(s) {
    var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",x = 0
    
    for(i = 0; i < s.length; i++){
        x = x * 26 + e.indexOf(s[i]) + 1
    }
    return x
}