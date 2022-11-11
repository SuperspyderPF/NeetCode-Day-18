var connect = function(r) {
    if (r == null || r.left == null) return r;
    r.left.next = r.right;
    r.right.next = r.next ? r.next.left:null;
    connect(r.left);
    connect(r.right);
    return r;
}