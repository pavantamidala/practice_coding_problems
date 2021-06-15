// Given an array of integers return the indices of the two numbers that add up to a given target

// my solution
let arr = [1, 3,9, 10, 8,2]
let target = 5
function findInteger(array, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [i, j]
            }
        }
    }
}
// console.log(findInteger(arr, target))

//other solutions not mine

function findInteger2(array,target){
    for(let i=0;i<array.length;i++){
        let numberToFind = target - array[i]
        
        for(let j=i+1;j<array.length;j++){
            if (array[j] === numberToFind) {
                return [i, j]
            }
        }
    }
    return null
}
console.log(findInteger2(arr,target))

