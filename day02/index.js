const fs = require('fs')

const example = [
    "7 6 4 2 1",
    "1 2 7 8 9",
    "9 7 6 2 1",
    "1 3 2 4 5",
    "8 6 4 4 1",
    "1 3 6 7 9"
]
const result = []
const value = 0

const buffer = fs.readFileSync('./dataset.txt', (err, data) => {
    if (err) {
        console.log(err)
        return null
    }
})  

const data = buffer.toString().split('\n')

function isIncreasing(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            return false
        }
    }
    return true;
}

function isDecreasing(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            return false
        }
    }
    return true; 
}
  
  
function checkDifference(arr) {
    if (arr.length < 2)
        return false
    const diff = arr.slice(1).map((value, index) => value - arr[index])
    if (diff.includes(0)) {
        console.log('zero increase detected')
        return false
    }
    const isIncreaseInRange = diff.filter((x) => x > 3 || x < -3)
    console.log('diff between element = ', diff)

    if (isIncreaseInRange.length > 0) {
        console.log('increase or decrease out of range', isIncreaseInRange)
        return false
    }
    if (!isIncreasing(diff) && !isDecreasing(diff)) {
        console.log('value is fluctuate')
        return false
    }
    console.log(arr)
    return true
}

const checkIfSafe = (str) => {
    const array = str.split(' ')
    const res = checkDifference(array)
    return res
}

data.forEach((row) => {
    if (checkIfSafe(row)) {
        result.push(true)
    } else {
        result.push(false)
    }
})

// example.forEach((row) => {
//     if (checkIfSafe(row)) {
//         result.push(true)
//     } else {
//         result.push(false)
//     }
// })

console.log(result)
console.log(result.reduce((acc, current) => acc + current, value))
