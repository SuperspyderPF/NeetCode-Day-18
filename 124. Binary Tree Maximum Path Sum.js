var maxPathSum = function (r) {
    var x = r.val;
  
    const z = (r) => {
      if (r === null) return 0;
  
      // compute left/right max, include only if they are non-negative
      var l1 = Math.max(0, z(r.left)),l2 = Math.max(0, z(r.right));
       
  
      // computes max path sum with the split
      x = Math.max(x, r.val + l1 + l2);
      // returns max path sum without split(so that it can be consumed by the parent node)
      var v = Math.max(r.val + l1, r.val + l2);
      return v;
    };
    z(r);
    return x;
  };
  //one line:
  maxPathSum=r=>{var x=r.val;var z=(r)=>{if(r===null)return 0;var l1=Math.max(0,z(r.left)),l2=Math.max(0,z(r.right));x=Math.max(x,r.val+l1+l2);var v=Math.max(r.val+l1,r.val+l2);return v;};z(r);return x;}