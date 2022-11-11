var pathSum = function(r, t) {
    if(!r) return 0;
    let c = 0;
    
    function s(e, x){
        if(!e) return;
		//traversing down the tree again, add up the x
        x += e.val;
        if(x === t) c++;
        return s(e.left, x) || s(e.right, x)
    }
    
    
    function dfs(e){
        if(!e) return;
		
		//inorder
        e.left && dfs(e.left);
        s(e, 0); //instantiate a new x of 0 at each e
        e.right && dfs(e.right);
    }
    
    dfs(r);
    return c;
};

//one line: 
pathSum=(r,t)=>{if(!r)return 0;var c=0;function s(e,x){if(!e)return;x+=e.val;if(x===t)c++;return s(e.left,x)||s(e.right,x)}function dfs(e){if(!e)return;e.left&&dfs(e.left);s(e,0);e.right&&dfs(e.right);}dfs(r);return c;}