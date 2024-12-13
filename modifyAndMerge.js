function modifyAndMerge(arr1, arr2) {

    const modifiedArr1 = arr1.slice();
    
    const bikeIndex = modifiedArr1.indexOf("bike");
    if (bikeIndex !== -1) {
        modifiedArr1.splice(bikeIndex, 1, "bus", "scooter");
    }
    
    const mergedArray = modifiedArr1.concat(arr2);
    
    return mergedArray;
}

const arr1 = ["car", "bike", "train"];
const arr2 = ["plane", "ship"];

const result = modifyAndMerge(arr1, arr2);
console.log("Merged Array:", result); 
console.log("Original arr1:", arr1);  
console.log("Original arr2:", arr2);  
