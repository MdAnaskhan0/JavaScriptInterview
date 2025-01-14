// Find largest integer number.
const myArray = [-15, -2, -6, -7, -8, -9, -6]
function findLeargestNumber() {
    let temp = myArray[0]
    for (let i = 0; i <= myArray.length; i++) {
        if (myArray[i] > temp) {
            temp = myArray[i]
        }
    }
    return temp;
}

let resut = findLeargestNumber()

console.log(resut)



// using Build in function:
function findLagest(){
    return Math.max(...myArray);
}

console.log(findLagest(myArray))