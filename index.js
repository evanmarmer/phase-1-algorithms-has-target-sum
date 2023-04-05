function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++){
    const compliment = target - array[i]
    for (let j = i + 1; j <array.length; j++){
      if (array[j] === compliment) return true
    }
  }
  return false
}
//  If two numbers in the array can be added together to equal the target number, return true
/* 
  Write the Big O time complexity of your function here
 runtime: 0(n^2)
 space: 0(n)
*/

/* 
  Add your pseudocode here
  function
  iterate through array 
  if two numbers in array = target #
  return true
  return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
