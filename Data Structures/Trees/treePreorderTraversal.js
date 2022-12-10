class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function preOrder(root) {
    if (root == null) return;
    process.stdout.write(root.data + " ");
    preOrder(root.left);
    preOrder(root.right);
}