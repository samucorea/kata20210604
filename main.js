function removeDuplicates(arr) {

    let uniqueArr = arr.filter((element, index) => arr.indexOf(element) === index)

    return uniqueArr
}


const arr = [5, 5, 5, 3, 2, 2, 3, 1, 1, 1]

console.log(removeDuplicates(arr))