Write a function to move all the elements of a list with value less than 10 to a new list and return it.

function extract_less_than_ten(nums) {...}


function extract_less_than_ten(nums){
  let less_than_ten = []
  for (let i=0; i<nums.length; i++){
    if (nums[i] < 10) {
      less_than_ten.push(nums[i])
    }
  }
  return less_than_ten
}
