var divide = function(s, e) {
    if (s === -2147483648 && e === -1) return 2147483647
    let x = 0, y = 1
    if (s < 0) s = -s, y = -y
    if (e < 0) e = -e, y = -y
    if (s === e) return y
    for (let i = 0, val = e; s >= e; i = 0, val = e) {
        while (val > 0 && val <= s) val = e << ++i
        s -= e << i - 1, x += 1 << i - 1
    }
    return y < 0 ? -x : x
};

//one line:
divide=(s,e)=>{if(s===-2147483648&&e===-1)return 2147483647;var x=0,y=1;if(s<0)s=-s,y=-y;if(e<0)e=-e,y=-y;if(s===e)return y;for(i=0,val=e;s>=e;i=0,val=e){while(val>0&&val<=s)val=e<<++i;s-=e<<i-1,x+=1<<i-1}return y<0?-x:x}