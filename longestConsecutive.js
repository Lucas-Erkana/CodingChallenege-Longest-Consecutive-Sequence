var longestConsecutive = function(nums) {
  nums = new Set(nums);
  let longest = 0;

  for(let n of nums) {
    if(!nums.has(n-1)) { //start of a sequence
      let currentNum = n;
      let currentLength = 1; 

      while(nums.has(currentNum+1)) {
        currentNum += 1;
        currentLength += 1;
        nums.delete(currentNum); 
      }

      longest = Math.max(longest, currentLength);
    }
  }

  return longest;
};
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
// Output: 4

console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
// Output: 9


module.exports = longestConsecutive;