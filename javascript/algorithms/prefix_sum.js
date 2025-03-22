/**
 * Implementation of a two-pointer algorithm to find a pair of numbers in a sorted array that sum to zero.
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

const prefixSum = (array, a, b) => {
    for(let i=1;i<array.length;i++){
        array[i] = array[i-1]+array[i]
    }
    if (a===0) return array[b]
    const sum = array[b] - array[a-1]
    console.log(sum)
}

prefixSum([0, 1, 2, 3, 4, 5], 2, 4)