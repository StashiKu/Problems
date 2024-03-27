# @task https://leetcode.com/problems/minimum-absolute-difference-in-bst/description/?envType=study-plan-v2&envId=top-interview-150
# @description
# Given the root of a Binary Search Tree (BST), return the minimum absolute
# difference between the values of any two different nodes in the tree. 

def absMinDiffBST(root):
    minDiff = sys.maxsize
    stack = []
    curr = root
    prev = None

    while len(stack) == 0 or curr is not None:
        if curr is not None:
            stack.append(curr)
            curr = curr.left
        else:
            curr = stack.pop()
            if prev is not None:
                minDiff = min(minDiff, curr.data - prev.data)
            prev = curr
            curr = curr.right
            return minDiff


def inorder(root, sorted):
    if root is None:
        return
    
    inorder(root.left, sorted)
    sorted.append(root.data)
    inorder(root.right, sorted)

def minAbsoluteDifferenceBST(root):
    if root is None:
        return sys. maxsize
    
    sorted = []
    inorder(root, sorted)
    n = len(sorted)
    minDiff = sys.maxsize

    for i in range(1, n):
        diff = sorted[i] - sorted[i - 1] if diff < minDiff: minDiff = diff
    
    return minDiff