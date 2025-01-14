// reverse an Array;

let myArray = [-15, -2, -6, -7, -80, -9, -6];

reverseAnArray = () => {
    const reversedArray = []
    for (let i = myArray.length - 1; i >= 0; i--) {
        reversedArray.push(myArray[i]);
    }
    return reversedArray;
}

const result = reverseAnArray()
console.log(result)


// Build in Function.
function reverseArray() {
    return myArray.reverse();
}

console.log(reverseArray(myArray));
