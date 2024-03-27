// @task https://leetcode.com/problems/minimum-absolute-difference-in-bst/description/?envType=study-plan-v2&envId=top-interview-150
// @solution https://leetcode.com/problems/minimum-absolute-difference-in-bst/solutions/3635462/solution-using-inorder-traversal-of-bst-in-typescript/?envType=study-plan-v2&envId=top-interview-150
// @desc
// Given the root of a Binary Search Tree (BST), return the minimum absolute 
// difference between the values of any two different nodes in the tree.
function getMinimumDifference(root) {
	const result = [];
	const inorderTraversal = (root) => {
		if (root !== null) {
			inorderTraversal(root.left);
			result.push(root.val);
			inorderTraversal(root.right);
		}
	}

	inorderTraversal(root);

	let minDifference = Infinity;

	for (let i = 1; i < result.length; i++) 
		minDifference = Math.min(minDifference, result[i] - result[i - 1]);

	return minDifference;
}