function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

function sumOfArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

function sortAndConcat(arr1, arr2) {
    const sortedArr1 = arr1.sort((a, b) => a - b);
    const sortedArr2 = arr2.sort((a, b) => a - b);
    return sortedArr1.concat(sortedArr2);
}

const arr1 = [12, 3, 7, 4, 10];
const arr2 = [9, 5, 8, 2];

const evenNumbers = filterEvenNumbers(arr1);
console.log("Even numbers:", evenNumbers); 

const sumArr1 = sumOfArray(arr1);
console.log("Sum of arr1:", sumArr1); 

const sortedAndConcatenated = sortAndConcat(arr1, arr2);
console.log("Sorted and concatenated array:", sortedAndConcatenated); 
