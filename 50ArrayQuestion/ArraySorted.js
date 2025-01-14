// Check If array is sorted.

// const myArray = [-15, -2, -6, -7, -80, -9, -6]
const myArray = [1, 3, 5, 7, 9];

function isSortedArray (){
    for(let i=1; i<=myArray.length; i++){
        if(myArray[i] < myArray[i-1]){
            return false;
        }
    }
    return true;
}

let result = isSortedArray()
console.log(result)

