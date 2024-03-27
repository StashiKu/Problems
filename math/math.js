// @task https://leetcode.com/problems/add-binary/description/?envType=study-plan-v2&envId=top-interview-150
// @desc
// Given two binary strings a and b, return their sum as a binary string.
function addBinary(a, b) {
    let result = "";
  
    let carry = 0;
    for(let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
      const num1 = parseInt(a[i] ?? "0");
      const num2 = parseInt(b[j] ?? "0");
      const sum = num1 + num2 + carry;
      
      carry = sum > 1 ? 1 : 0;
      result = (sum % 2 === 1 ? "1" : "0") + result;
    }
  
    return carry ? "1" + result : result;
};

// @task https://leetcode.com/problems/factorial-trailing-zeroes/description/?envType=study-plan-v2&envId=top-interview-150
// @solution https://leetcode.com/problems/factorial-trailing-zeroes/solutions/3808067/short-and-optimize-code-step-by-step-explanation/?envType=study-plan-v2&envId=top-interview-150
// @desc
// Given an integer n, return the number of trailing zeroes in n!.
// Note that n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1.
function trailingZeroes(n) {
    let res = 0;

    while( n > 0 ) {
        n = Math.floor(n / 5);
        res += n;
    }

    return res;
};

// @task https://leetcode.com/problems/powx-n/description/?envType=study-plan-v2&envId=top-interview-150
// @solution https://leetcode.com/problems/powx-n/solutions/4429716/binary-exponentiation/?envType=study-plan-v2&envId=top-interview-150
// @desc make pow
function myPow(x, n) {
    const isNegativePower = n < 0;
    n = Math.abs(n);
    let result = 1;

    while (n > 0) {
      if (n % 2 === 1) result *= x;
      x *= x;
      n = Math.floor(n / 2);
    }
    return isNegativePower ? 1 / result : result;
};

// console.log(removeDuplicates2([1,1,2,2,2,2,3,3,3,3,3,4]));

function gcd(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);

    return b == 0 ? a : gcd(b, a % b);
}

function gcd2(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);

    if (a < b) {
        [a,b] = [b, a];
    }

    let r = a % b;

    while (r !== 0) {
        a = b;
        b = r;
        r = a % b;
    }

    return b;
}


function canCompleteCircuit(gas, cost) {
    for (let i = 0; i < gas.length; i++) {
        let j = i + 1;
        let itemsToIterate = gas.length - 1;
        let tank = gas[j - 1];
        let gasToSpend = cost[j - 1];

        while (tank - gasToSpend >= 0 && itemsToIterate >= 0) {
            if (j >= gas.length) {
                j = 0;
            }

            tank = tank - gasToSpend + gas[j];
            
            j++;
            itemsToIterate--;

            gasToSpend = cost[j - 1];
        }

        if (j - 1 == i && (tank - gasToSpend) >= 0) return i;
    }

    return -1
};

console.log(canCompleteCircuit([5,1,2,3,4], [4,4,1,5,1]));
