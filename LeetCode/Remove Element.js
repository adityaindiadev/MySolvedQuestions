// 27. Remove Element
let nums = [3, 2, 2, 3]
var removeElement = function (nums, val) {
    
    let flag = -1

    for (i = 0; i < nums.length; i++) {

        const elem = nums[i]

        if ((elem != val)) {
            flag++
            nums[flag] = elem
        }



    }

    return (flag + 1)
};
console.log(removeElement(nums, 3));
console.log(nums);