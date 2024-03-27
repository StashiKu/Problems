// O(n)

let start = 0;
let end = 0;

let minValue = Infinity;

let subarraySum = nums[0];



while(start <= end && end < nums.length){

    if(subarraySum >= target){
    
        minValue = Math.min(minValue, end-start+1);
    
        subarraySum -= nums[start];
        start++;
    } else {

        end++;
        subarraySum += nums[end];
    }
}

return minValue === Infinity ? 0 : minValue;