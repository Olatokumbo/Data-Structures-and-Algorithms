/**
 * Implementation of a two-pointer algorithm to find a pair of numbers in a sorted array that sum to zero.
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

const sumZero = (array) => {
    var left = 0;
    var right = array.length-1;
    while(left<right){
        let sum = array[left]+array[right];
        if(sum===0){
            return console.log([array[left], array[right]]); 
        }
        else if(sum >0){
            right--;
        }
        else{
            left++;
        }
    }
}

// Test case
sumZero([-2, 1, 0, 1, 2, 3])