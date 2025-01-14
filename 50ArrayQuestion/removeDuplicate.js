const myArray = [5, 2, 9, 1, 7, 5, 6, 3, 7]

function removeDuplicate(){
    let findUnique = [...new Set(myArray)];
    return findUnique;
}

let result = removeDuplicate()
console.log(result)