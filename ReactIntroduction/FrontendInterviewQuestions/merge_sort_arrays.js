nums1 = [2,4,5]
nums2 = [1,3]

// Our task to merge two arrays in a sorted manner using the existing memory without using extra memory.
// Here we will go from top index to low index to sort the array.

function mergeSortedArray(nums1, nums2) {
    let n1 = nums1.length, n2 = nums2.length;

    for (let i = 0; i < n2; i++) {
        nums1.push(0);
    }

    let i = n1 - 1, j = n2 - 1, ptr = n1 + n2 - 1;

    while(i >= 0 && j >= 0){
        if (nums1[i] >= nums2[j]){
            nums1[ptr] = nums1[i];
            ptr--;
            i--;
        }
        else{
            nums1[ptr] = nums2[j];
            ptr--;
            j--;
        }
    }

    while(j >= 0){
        nums1[ptr--] = nums2[j--];
    }
}

mergeSortedArray(nums1, nums2)