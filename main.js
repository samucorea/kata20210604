
const removeDuplicates = arr => [...new Set(arr)]

let arr = [3, 3, 3, 3, 1, 1, 1, 4, 4, 4, 8, 8]

console.log(removeDuplicates(arr))