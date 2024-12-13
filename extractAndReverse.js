function extractAndReverse(arr) {
  
    const subarray = arr.slice(2, 5);
    
    const reversedSubarray = subarray.reverse();
    
    return reversedSubarray;
}
const originalArray = [15, 30, 45, 60, 75, 90];
const result = extractAndReverse(originalArray);

console.log("Reversed Subarray:", result); 
console.log("Original Array:", originalArray); 
