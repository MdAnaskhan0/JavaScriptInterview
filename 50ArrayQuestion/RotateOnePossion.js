// Rotaed Array by One Possition 

const myArray = [1,2,3,5,6,8,9,4]

function rotateOnePossition (){
    let lastElement = myArray.pop()  // pop() -> get last element
    myArray.unshift(lastElement)
    return myArray     // unshift() -> add element in the front.
}

let result = rotateOnePossition()
console.log(result)