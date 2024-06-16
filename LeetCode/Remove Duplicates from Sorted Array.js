// 26. Remove Duplicates from Sorted Array

let nums = [-1, 0, 0, 0, 0, 3, 3]

// var removeDuplicates = function (nums) {

//     let uniqueElemSet = new Set()
//     for(i = 0; i<nums.length; i++)
//     {
//         const elem = nums[i]
//         uniqueElemSet.add(elem)
//     }

//     let uniqueElemArr = [...uniqueElemSet]

//     const k = uniqueElemArr.length

//     for(i=0; i<(nums.length-k); i++){
//         uniqueElemArr.push("_")
//     }

//     nums.length = 0

//     uniqueElemArr.forEach((item)=>{
//         nums.push(item)
//     })

//     return k

// };

var removeDuplicates = function (nums = []) {

    let uniqueElemObj = undefined

    let lastUniqueElemPosition = -1

    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];

        if (uniqueElemObj == element) {
        }
        else {
    
            lastUniqueElemPosition++
            nums[lastUniqueElemPosition] = element
            uniqueElemObj = element
        }

    }



    for (let index = (lastUniqueElemPosition + 1); index < (nums.length); index++) {
        nums[index] = "_"

    }
    console.log(uniqueElemObj);
    return (lastUniqueElemPosition + 1)

}

console.log(removeDuplicates(nums));
console.log(nums);