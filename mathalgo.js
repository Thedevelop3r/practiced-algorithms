function factorial(number){
    const sequence = [];
    for(let i=number; i > 0; i--){
        sequence.push(i)
    }
    return sequence.reduce((acc, next)=> acc*next);
}
// factorial(4)

function isPrimeNumber(number){
    let prime = true;
    for(let i=1; i<= number; i++){
        for(let j=1; j<=number; j++){
            if(i*j == number && (i !== 1 && j !== number  ) && (i !== number && j !== 1) ){
                prime = false;
            }
        }
    }
    console.log(`${number} is ${ prime ? 'a' : 'not a' } prime number!`);
    return prime;
}
// isPrimeNumber(5)

function linearSearch(arrayOfNum, t){
    return arrayOfNum.indexOf(t);
}

// console.log(linearSearch([0,3,2,5,6,7,1], 9)); // -1
// console.log(linearSearch([0,3,2,5,6,7,1], 5)); // 3

function binarySearch(sortedArray, t){
    // [1,2,3,4,5,6,7,8,9,10]
    // could be simplified by removing the direction logic with only for loops
    let middle = Math.ceil(sortedArray.length / 2);
    let direction;
    if(sortedArray[middle] == t) return middle;
    if(t > middle){
        // loc 1
        direction = 'forward';
    }else{
        // loc 2
        direction = 'backward';
    }

    if(direction=='forward'){
        // move loop to loc 1
        for (let  i = middle; i < sortedArray.length; i++){
            if(sortedArray[i] == t) return i;
        }
    }else{
        // move loop to loc 2
        for (let  i = middle; i >=0 ; i--){
            if(sortedArray[i] == t) return i;
        }
    }

    return -1;
}

// console.log(binarySearch([1,2,3,4,5,6,7,8,9,12,35,65], 65));
// console.log(binarySearch([1,2,3,4,5,6,7,8,9,90], 2));
// console.log(binarySearch([1,2,3,4,5,6,7,8,9,120], 4));