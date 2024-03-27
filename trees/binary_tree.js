// @task https://leetcode.com/problems/maximum-depth-of-binary-tree/description/?envType=study-plan-v2&envId=top-interview-150
// @solution https://leetcode.com/problems/maximum-depth-of-binary-tree/solutions/3596270/one-liner-beats-100-dfs-typescript/?envType=study-plan-v2&envId=top-interview-150
// @desc
// Given the root of a binary tree, return its maximum depth.
// A binary tree's maximum depth is the number of nodes along 
// the longest path from the root node down to the farthest leaf node.

function maxDepth(root) {
    return root ? Math.max(maxDepth(root.left), maxDepth(root.right)) + 1 : 0;
};

// @task 
// https://leetcode.com/problems/same-tree/description/?envType=study-plan-v2&envId=top-interview-150
// @solution 
// [DFS] https://leetcode.com/problems/same-tree/solutions/3822640/typescript-solution-99-48-runtime-97-77-memory/?envType=study-plan-v2&envId=top-interview-150
// @desc
// Given the roots of two binary trees p and q, write a function to check if they are the same or not.
// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
const isSameTree = (p, q) => {
    if (p?.val == null && q?.val == null)
        return true

    return p?.val === q?.val
        ? isSameTree(p?.left, q?.left) && isSameTree(p?.right, q?.right)
        : false
}

// @task 
// https://leetcode.com/problems/invert-binary-tree/?envType=study-plan-v2&envId=top-interview-150
// @desc
// Given the root of a binary tree, invert the tree, and return its root.

function invertTree(root) {
    if (!root) return null;

    let l = root.left
    let r = root.right

    root.right = invertTree(l)
    root.left = invertTree(r)

    return root
};


// @task 
// https://leetcode.com/problems/symmetric-tree/description/?envType=study-plan-v2&envId=top-interview-150
// @sample https://leetcode.com/problems/symmetric-tree/solutions/3494432/typescript-bfs-traverse-solution/?envType=study-plan-v2&envId=top-interview-150
// @desc
// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
function isSymmetric(root) {

    const stack = [[root.left, root.right]];
    while (stack.length > 0) {
        const [left, right] = stack.pop();
        if (left?.val != right?.val) return false;

        (left?.left || right?.right) && stack.push([left.left, right.right]);
        (left?.right || right?.left) && stack.push([left.right, right.left]);
        
    }

    return true;
};

const isSymmetric = (root) => {
    return isMirror(root, root);
  };
    
const isMirror = (t1, t2) => {
    if (t1 === null && t2 === null) return true;
    if (t1 === null || t2 === null) return false;

    return (t1.val === t2.val) && isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left);
}


// @task 
// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/?envType=study-plan-v2&envId=top-interview-150
// @sample https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/solutions/3109740/simple-readable-javascript-solution/?envType=study-plan-v2&envId=top-interview-150
// @desc
// Given two integer arrays preorder and inorder where preorder is the preorder 
// traversal of a binary tree and inorder is the inorder traversal of the same 
// tree, construct and return the binary tree.
var buildTree = function (preorder, inorder) {
    if (!inorder.length) return null;
  
    const root = preorder[0];
    const pivot = inorder.indexOf(root);

    return {
      val: root,
      left: buildTree(preorder.slice(1, pivot + 1), inorder.slice(0, pivot)),
      right: buildTree(preorder.slice(pivot + 1), inorder.slice(pivot + 1)),
    };
};

// @task https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/?envType=study-plan-v2&envId=top-interview-150
// @desc
// Given two integer arrays inorder and postorder where inorder is the inorder traversal of a binary tree and 
// postorder is the postorder traversal of the same tree, construct and return the binary tree.
function buildTreeFromInorderAndPostorder(inorder, postorder) {
    
};


// @task 
// https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/description/?envType=study-plan-v2&envId=top-interview-150
// @solution 
// [https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/solutions/1674478/easy-to-understand-javascript-solution/?envType=study-plan-v2&envId=top-interview-150
// @desc
// Populate each next pointer to point to its next right node. 
// If there is no next right node, the next pointer should be set to NULL.
// Initially, all next pointers are set to NULL.

var connect = function(root) {
	if (!root) return root;
	const getNext = (next) => {
		if (!next) return null;
		const nextLeft = next?.left;
		const nextRight = next?.right;
		return nextLeft ?? nextRight ?? getNext(next.next);
	};

	if (root.left) root.left.next = root.right ?? getNext(root?.next); 
	if (root.right) root.right.next = getNext(root?.next);

	connect(root.right);
	connect(root.left);
	return root;
};


// @task https://leetcode.com/problems/flatten-binary-tree-to-linked-list/description/?envType=study-plan-v2&envId=top-interview-150
// @solution https://leetcode.com/problems/flatten-binary-tree-to-linked-list/solutions/1207642/js-python-java-c-simple-o-1-space-recursive-solutions-w-explanation/?envType=study-plan-v2&envId=top-interview-150
// @desc
// Given the root of a binary tree, flatten the tree into a "linked list":

// The "linked list" should use the same TreeNode class where the right child pointer points to 
// the next node in the list and the left child pointer is always null.
// The "linked list" should be in the same order as a pre-order traversal of the binary tree.
var flatten = function(root) {
    let curr = root
    while (curr) {
        if (curr.left) {
            let runner = curr.left
            while (runner.right) runner = runner.right
            runner.right = curr.right, curr.right = curr.left, curr.left = null
        }
        curr = curr.right
    }
};

// @task https://leetcode.com/problems/path-sum/description/?envType=study-plan-v2&envId=top-interview-150
// @solution https://leetcode.com/problems/path-sum/solutions/2432844/very-easy-100-3-line-explained-java-c-python-js-c-python3/?envType=study-plan-v2&envId=top-interview-150
// @desc
// Given the root of a binary tree and an integer targetSum, return true if the tree 
// has a root-to-leaf path such that adding up all the values along the path equals targetSum.
// A leaf is a node with no children.
var hasPathSum = function(root, targetSum) {
    // If the tree is empty i.e. root is NULL, return false...
	if (root == null) return false;
    // If there is only a single root node and the value of root node is equal to the targetSum...
	if (root.val == targetSum && (root.left == null && root.right == null)) return true;
    // Call the same function recursively for left and right subtree...
	return hasPathSum(root.left, targetSum - root.val)|| hasPathSum(root.right, targetSum - root.val);
};

