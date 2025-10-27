// write polifill of Array.flat with customized nesting

const nums = [2, 3, [4, 5, [6, 7, 8]], 9];
// so here flat works like:
// depth 0 => [ 2, 3, [4, 5, [6, 7, 8]], 9 ]
// depth 1 => [ 2, 3, 4, 5, [6,7,8], 9 ]   Here we went for only one depth so in [4,5,[6,7,8]] => 4,5,[6,7,8]
// depth 2 => [ 2, 3, 4, 5, 6, 7, 8, 9 ]   Here we went for two depth so in [4,5,[6,7,8]] => 4,5,6,7,8
// depth 3 => [ 2, 3, 4, 5, 6, 7, 8, 9 ]   Here we went for three depths but we donth have any further depths to execute here so obviously it will return the same as depth 2 array.

function flatArray(arr, depth){
    if(depth === 0){
        return arr;   //Because depth 0 means no flattening we dont have arrays inside an array
    }

    let temp = [];
    for (let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            const result = flatArray(arr[i], depth - 1);
            temp.push(...result);
        }
        else {
            temp.push(arr[i]);
        }
    }
    return temp;
}

flatArray(nums, 1);