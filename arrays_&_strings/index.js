const removeDuplicates2 = function (nums) {
    if (!nums.length) return 0;
  
    let k = 0;
  
    for (let i = 0; i < nums.length; i++) {
      if (k < 2 || nums[i] > nums[k - 2]) {
        nums[k] = nums[i];
        k++;
      }
    }
  
    return k;
};

function rotate(nums, k) {
    let l = nums.length;
    let indexToMove = l < k ? k % nums.length : k;
    let itemsToMove = nums.splice(l - indexToMove);
    nums.unshift(...itemsToMove);

    return nums
};

// console.log(rotate([1,2,], 3));


// @solution https://leetcode.com/problems/best-time-to-buy-and-sell-stock/solutions/2572962/typescript-solution/?envType=study-plan-v2&envId=top-interview-150
// @task https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/?envType=study-plan-v2&envId=top-interview-150
function maxProfit(prices) {
    let min = prices[0]
    let max = 0
    
    for (let i = 1; i < prices.length; i++) {
      min = Math.min(min, prices[i])
      max = Math.max(max, prices[i] - min)
    }
    
    return max
}

function maxProfit(prices) {
    let max = 0;
    let sell = 1;
    let buy = 0;

    while(sell < prices.length) {
        if(prices[sell] > prices[buy]) {
            max = Math.max(max, prices[sell] - prices[buy])
        } else {
            buy = sell;
        }
        sell++;
    }

    return max;
};


// @solution https://leetcode.com/problems/jump-game/solutions/2531333/simple-ts-with-explanation/?envType=study-plan-v2&envId=top-interview-150
// @task https://leetcode.com/problems/jump-game/description/?envType=study-plan-v2&envId=top-interview-150
function canJump(nums) {
    let left = nums[0]
    for(let i = 1; i < nums.length; i++) {
        if(left == 0) {
            return false
        }
        left = Math.max(left - 1, nums[i])
    }
    return true
};


function convert(s, numRows) {
    let row = 0;
    let res = '';
    let i = numRows;

    while (row < numRows) {
        if (i < 2) i = numRows;
        let step = (i - 1) * 2;

        let index = row;

        while (s[index]) {
            res += s[index];
            index += step
        }

        row++;
        i--
    }

    return res
};

function lengthOfLongestSubstring(s) {
    let str = ''
    let maxLen = 0;
    let j = 0;

    for (let i = 0; i < s.length; i++) {
        while(str.includes(s[i]) && j < s.length) {
            str = str.slice(1);
            j++
        }

        str += str[i]

        maxLen = Math.max(maxLen, str.length)
    }

    return maxLen
};

// console.log(lengthOfLongestSubstring('abcabcbb'));

function minSubArrayLen(target, nums) {
    let minLength = Infinity;
    let j = 0;
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]

        while (sum >= target && j < nums.length) {
            if (sum == target) {
                minLength = Math.min(minLength, i - j + 1);
            }
            sum -= nums[j]
            j++
        }
    }

    return minLength == Infinity ? 0 : minLength
}

// console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));

function test(intervals) {
    intervals.sort((a, b) => a[0] - b[0])
    let max = intervals[0][1];
    let min = intervals[0][0];
    let res = [];

    for (let i = 0; i < intervals.length; i++) {
        if (intervals[i+1] && (max >= intervals[i + 1][0])) {
            min = Math.min(intervals[i][0], intervals[i + 1][0], min);
            max = Math.max(intervals[i][1], intervals[i + 1][1], max);
        } else {
            res.push([min, max]);
            if (intervals[i+1]) {
                max = intervals[i + 1][1]
                min = intervals[i + 1][0]
            }
        }
    }

    return res
}

console.log(test([[2,3],[4,5],[6,7],[8,9],[1,10]]));