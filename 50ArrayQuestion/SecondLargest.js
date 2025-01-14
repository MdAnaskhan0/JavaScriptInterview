// Find Second Largest Element

const myArray = [5, 2, 9, 1, 7, 5, 6, 3, 7]

function findSecondLargestElement() {
    let sortedArray = [...new Set(myArray)]     //find the unique all number. 
    sortedArray = sortedArray.sort((a, b) => { return a - b });     //sorted the array
    console.log("sorted Array:", sortedArray)
    return sortedArray[sortedArray.length-2]
}

let result = findSecondLargestElement()
console.log(result)

