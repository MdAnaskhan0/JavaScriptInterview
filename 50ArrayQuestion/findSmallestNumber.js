// Find Lowest integer number.
const myArray = [-15, -2, -6, -7, -80, -9, -6]

function lowestNumberFromArray (){
    let temp = myArray[0]
    for(let i=1; i<=myArray.length; i++){
        if (myArray[i] < temp){
            temp = myArray[i];
        }
    }
    return temp;
}

let result = lowestNumberFromArray()
console.log(result)


// using Build in function
findSmallest=()=>{
    return Math.min(...myArray)
}
console.log(findSmallest(myArray))