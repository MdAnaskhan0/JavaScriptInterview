// Count each element frequency

const myArray = [1, 2, 1, 2, 3, 4, 3, 4, 1, 2];

function countFrequnecy() {
    let uniqueItem = [...new Set(myArray)]
    let countFrequnecy = {};

    for(const item of uniqueItem){
        let count = 0;
        for(const num of myArray){
            if(item === num){
                count++
            }
        }
        countFrequnecy[item] = count
    }
    return countFrequnecy;  
}


const result = countFrequnecy()
console.log(result)


// Another Process:

function countEachElementFrequency (){
    return myArray.reduce((freq, num)=>{
        freq[num] = (freq[num] || 0) + 1;
        return freq
    },{});
}

const result2 = countEachElementFrequency()
console.log(result2)