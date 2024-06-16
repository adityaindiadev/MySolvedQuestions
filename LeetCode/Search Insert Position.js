// 35. Search Insert Position
        // 0  1  2  3
let nums = [1, 3, 5, 6]
let target = 5

var searchInsert = function (nums, target) {

    
    let l = 0
    let r = nums.length-1

    while(l<=r){

        let mid = parseInt((l+r)/2)

        if (nums[mid] == target) {
            return mid
        }
        else if (target < nums[mid]) {
            r =  mid-1           
        }
        else {
            l = mid + 1
        }

        

    }
    return l
};

console.log(searchInsert(nums, 9))