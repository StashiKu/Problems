// @task https://leetcode.com/problems/binary-tree-right-side-view/description/?envType=study-plan-v2&envId=top-interview-150
// @solution https://leetcode.com/problems/binary-tree-right-side-view/solutions/382850/simple-javascript-bfs-solution-using-queue/?envType=study-plan-v2&envId=top-interview-150
// @desc
// Given the root of a binary tree, imagine yourself standing on the right side of it,
// return the values of the nodes you can see ordered from top to bottom.

var rightSideView = function(root) {
    const result = [];
    const queue = [];
    
    if (root === null) return result;
    
    queue.push(root);

    while(queue.length !== 0) {
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let n = queue.shift();
            if (i === size - 1) result.push(n.val);
            if (n.left !== null) queue.push(n.left);
            if (n.right !== null) queue.push(n.right);
        }
    }
    
    return result;
};

// DFS
const rightSideView = (
    root,
    answer,
    depth = 0
  ) => {
    if (!root) return answer;
    answer[depth] = root.val;
    rightSideView(root.left, answer, depth + 1);
    return rightSideView(root.right, answer, depth + 1);
};
