// Sum of 2 number is 10, which are the 2 numbers in the array
// By using Selection Sort Method


function findPairWithSum (arr, sum) {
    // let pairs = []
    for (let i = 0; i < arr.length - 1 ; i++){
        for (let j = i+1; j < arr.length ; j++){
            if(arr[i] + arr[j] == sum){                                         // Time Complexity = O(n^2)
                // pairs.push ([arr[i],arr[j]])                                 // Sapce Complexity = O(1)
                return ([arr[i],arr[j]])
            }
        }
    }
    // return pairs
    return null;
}


const arr = [6, 5, 4, 3, 9, 8, 0, 2];
const sum = 10;
const result = findPairWithSum(arr, sum);

console.log(result)

// two conditions are here,
// I write pairs to get multiple pairs outcome for the sum


// -------------------------------------------------------------------------------------------------------------------------------------------------------