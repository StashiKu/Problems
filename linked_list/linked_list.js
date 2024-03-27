// @task https://leetcode.com/problems/add-two-numbers/description/?envType=study-plan-v2&envId=top-interview-150
// @solution https://leetcode.com/problems/add-two-numbers/solutions/4091359/100-beats-java-c-python-javascript-c-php/?envType=study-plan-v2&envId=top-interview-150
// @desc You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single digit.
// Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

function addTwoNumbers(l1, l2) {
  let dummyHead = new ListNode(0); // Create a dummy node to simplify the code.
  let current = dummyHead; // Initialize a current pointer to the dummy node.
  let carry = 0; // Initialize a variable to store the carry value.

  while (l1 || l2) {
      const x = l1 ? l1.val : 0;
      const y = l2 ? l2.val : 0;
      const sum = x + y + carry;

      carry = Math.floor(sum / 10); // Calculate the carry for the next iteration.
      current.next = new ListNode(sum % 10); // Create a new node with the current digit.

      current = current.next; // Move the current pointer to the next node.

      if (l1) l1 = l1.next;
      if (l2) l2 = l2.next;
  }

  // If there is a carry after processing all digits, add it as a new node.
  if (carry > 0) {
      current.next = new ListNode(carry);
  }

  return dummyHead.next; // Return the result, skipping the dummy node.
}


// @task https://leetcode.com/problems/merge-two-sorted-lists/description/?envType=study-plan-v2&envId=top-interview-150
// @solution https://leetcode.com/problems/merge-two-sorted-lists/solutions/3353373/javascript-easy-explanation-100-for-loop/?envType=study-plan-v2&envId=top-interview-150
// @desc You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists into one sorted list. The list should be made by splicing 
// together the nodes of the first two lists. Return the head of the merged linked list.
var mergeTwoLists = function(l1, l2) {
  let tempNode = new ListNode(0, null);
  let currentNode = tempNode;
  
  while (l1 && l2) {
    if (l1.val < l2.val) {
      currentNode.next = l1;
      l1 = l1.next;
    } else {
      currentNode.next = l2;
      l2 = l2.next;
    }
    currentNode = currentNode.next;
  }
  currentNode.next = l1 || l2;
  
  return tempNode.next;
};

// @task
// https://leetcode.com/problems/copy-list-with-random-pointer/?envType=study-plan-v2&envId=top-interview-150
//
// @solution
//  
// @desc
// A linked list of length n is given such that each node contains an additional random pointer,
// which could point to any node in the list, or null. Construct a deep copy of the list. The deep 
// copy should consist of exactly n brand new nodes, where each new node has its value set to the 
// value of its corresponding original node.
function copyRandomList(head) {
    
};


function removeNthFromEnd(head, n) {
    let fast = head, slow = head
    for (let i = 0; i < n; i++) fast = fast.next
    if (!fast) return head.next

    while (fast.next) fast = fast.next, slow = slow.next
    slow.next = slow.next.next
    return head
};


// @task https://leetcode.com/problems/reverse-linked-list-ii/description/?envType=study-plan-v2&envId=top-interview-150
// @desc
// Given the head of a singly linked list and two integers left and right where left <= right,
// reverse the nodes of the list from position left to position right, and return the reversed list.
function reverseBetween(head, left, right) {
    
};


// @task https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/?envType=study-plan-v2&envId=top-interview-150
// @desc
// Given the head of a sorted linked list, delete all nodes that have duplicate numbers, 
// leaving only distinct numbers from the original list. Return the linked list sorted as well.
function deleteDuplicates(head) {
    if (!head) { return null }
    if (!head.next) { return head }
    let fakeHead = new ListNode(undefined, head) // beginning of a returned linked list
    let prev = fakeHead // start of the group with same values
    let current = head // pointer
  
    while (current) { // move through the current group until new value is seen
      while (current.next && prev.next && prev.next.val === current.next.val) { current = current.next }
  
      if (prev.next === current) {
        prev = prev.next // if group has only one member, move prev to current
      } else {
        prev.next = current.next // otherwise, exclude the group
      }
  
      current = current.next // Move to the next node
    }
  
    return fakeHead.next
}

// @desc https://leetcode.com/problems/rotate-list/?envType=study-plan-v2&envId=top-interview-150
// @solution https://leetcode.com/problems/rotate-list/description/?envType=study-plan-v2&envId=top-interview-150
// @description Given the head of a linked list, rotate the list to the right by k places.
// @example Input: head = [1,2,3,4,5], k = 2
// Output: [4,5,1,2,3]
const rotateRight = (head, k) => {
    if (!head || !head.next || !k) return head;
    let newTail = head;
    let tail = head;
    let len = 1;
    // get current tail node and length of linked list
    while (tail.next) {
      tail = tail.next;
      ++len;
    }
    // link current tail to head
    tail.next = head;
    // get the new tail node
    for (let i = 1; i < len - (k % len); ++i) {
      newTail = newTail.next;
    }
    const ret = newTail.next;
    // change it into the real tail
    newTail.next = null;
    return ret;
  };

rotateRight({next: null}, 3);


  // @desc https://leetcode.com/problems/partition-list/description/?envType=study-plan-v2&envId=top-interview-150
  // @solution https://leetcode.com/problems/partition-list/solutions/4197806/beast-94-type-script-easy-solution-with-explanation/?envType=study-plan-v2&envId=top-interview-150

  // @desc Given the head of a linked list and a value x, partition it such that all nodes less 
  // than x come before nodes greater than or equal to x.
  // You should preserve the original relative order of the nodes in each of the two partitions.
  // @example Input: head = [1,4,3,2,5,2], x = 3
  // Output: [1,2,2,4,3,5]
  function partition(head, x) {

    const smallerHead = new ListNode()
    let lastSmallerNode = smallerHead;
    const pointerHead = new ListNode(0, head);
    let pointer = pointerHead;
  
    while(pointer.next) { 
      // we always check for the value of the next node to remove it easily
      if(pointer.next.val < x) {
        // here we add the samaller node to our smaller list
        lastSmallerNode.next = pointer.next;
  
        // then we update the tail of the smallers list
        lastSmallerNode = pointer.next;
  
        // here we remove the smaller node from the current list
        pointer.next = pointer.next.next
  
      }else{
        // since the head of the smaller values can cointain greater values we need to remove the last value every time that we found a bigger value
        lastSmallerNode.next = null;
        pointer = pointer.next;
      }
    }
  
    // finally we merge both lists
    lastSmallerNode.next = pointerHead.next
    
    // notice that we return the second node of the head because our head starts with a placeholder value which helped us to start the list 
    return smallerHead.next
}


// @description https://leetcode.com/problems/lru-cache/description/?envType=study-plan-v2&envId=top-interview-150
// @solution https://leetcode.com/problems/lru-cache/solutions/3783850/doubly-linked-list-solution-deck/?envType=study-plan-v2&envId=top-interview-150

// @desc Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.
class ListItem {
  prev;
  next;
  val;
  key;

  constructor(key = null, val = null, prev = null, next = null) {
      this.val = val;
      this.key = key;
      this.prev = prev;
      this.next = next;
  }
}

class LRUCache {
  head = new ListItem(-1,-1);
  tail = new ListItem(-1,-1);
  dict = new Map();
  capacity;

  constructor(capacity) {
      this.capacity = capacity;
      this.head.next = this.tail;
      this.tail.prev = this.head;
  }

  get(key) {
      if (this.dict.has(key)) {
          const item = this.dict.get(key);
          this.updateItem(item)
          return item.val;
      } 
      return -1;
  }


  put(key, value) {
      if (this.dict.has(key)) {
          const item = this.dict.get(key);
          this.updateItem(item)
          item.val = value;
      } else {
          const item = new ListItem(key, value);
          item.next = this.tail;
          item.prev = this.tail.prev

          this.tail.prev.next = item;
          this.tail.prev = item;
          this.dict.set(key, item);

          if (this.dict.size > this.capacity) {
              const item = this.head.next;

              this.head.next = this.head.next.next;
              this.head.next.prev = this.head;
              this.dict.delete(item.key)
          }
      }
  }

  updateItem(item) {
      item.prev.next = item.next;
      item.next.prev = item.prev;
      item.next = this.tail;
      item.prev = this.tail.prev;

      this.tail.prev.next = item;
      this.tail.prev = item;
  }
}

class ListItem2 {
  next;
  val;

  constructor(val = null, next = null) {
      this.val = val;
      this.next = next;
  }
}


let l1 = new ListItem2(1);
l1.next = new ListItem2(4);
l1.next.next = new ListItem2(3);
l1.next.next.next = new ListItem2(2);
l1.next.next.next.next = new ListItem2(5);
l1.next.next.next.next.next = new ListItem2(2);
// l1.next.next.next.next.next.next = new ListItem2(9);
// let l2 = new ListItem2(9);
// l2.next = new ListItem2(9);
// l2.next.next = new ListItem2(9);
// l2.next.next.next = new ListItem2(9);

// let l1 = new ListItem2(2);
// l1.next = new ListItem2(4);
// l1.next.next = new ListItem2(3);

// let l2 = new ListItem2(5);
// l2.next = new ListItem2(6);
// l2.next.next = new ListItem2(4);


function sortList(head, x) {
  if (!head) return null;
    if (!head.next) return head;

    let dh = new ListItem2(Number.MIN_SAFE_INTEGER);
    dh.next = head;
    let prev = dh;
    let curr = head;

    while (curr) {
        if (curr.val < x) {
            if (curr === head) {
                head = curr.next
            }

            prev.next = curr.next;
            let currSl = dh;
            let prevSl = dh

            while (curr.val >= currSl.val) {
                prevSl = currSl
                currSl = currSl.next
            }

            prevSl.next = curr;
            curr.next = currSl;
            
            if (prev === dh) {
              curr = head
            } else {
              curr = prev.next

            }

        } else {
            prev = curr;
            curr = curr.next;
        }
    }
    
    return dh.next
};


let res = sortList(l1, 3);

while (res.next) {
  console.log(res.val, '->');
  res = res.next ? res.next : null;
}
