const evenOnly = (arr) => arr.filter((n, i) => n % 2 === 0 && i % 2 === 0);

// Solution
function evenOnly(nums) {
  return nums.filter((item, index) => !(item % 2) && !(index % 2));
}
