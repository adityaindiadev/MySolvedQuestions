// 88. Merge Sorted Array


var merge = function (nums1, m, nums2, n) {

    let finalArr = []

    let i = 0
    let j = 0

    while ((i < m) && (j < n)) {

        // console.log(`${nums1[i]} <= ${nums2[j]}`);

        if (nums1[i] <= nums2[j]) {

            

            finalArr.push(nums1[i])
            i++

        } else {
            finalArr.push(nums2[j])
            j++
        }

    }

    while (i < m) {

        finalArr.push(nums1[i])
        i++

    }
    while (j < n) {

        finalArr.push(nums2[j])
        j++

    }

    nums1.length = 0

    finalArr.forEach((item) => {
        nums1.push(item)
    })

    console.log(finalArr);

};
let nums1 = [1,2,3,0,0,0]
let nums2 = [2, 5, 6]
let m = 3
let n = 3
merge(nums1, m, nums2, n)

console.log(nums1);