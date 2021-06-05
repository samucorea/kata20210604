
const removeDuplicates = arr => [...new Set(arr)]

function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }
    else if (arr.length === 0) {
        return []
    }

    let arrayLeft = arr.slice(0, (arr.length / 2))
    let arrayRight = arr.slice(arr.length / 2, arr.length)

    // [1,3,-4,5]


    arrayLeft = mergeSort(arrayLeft)
    arrayRight = mergeSort(arrayRight)


    return merge(arrayLeft, arrayRight)
}

function merge(a, b) {
    const mergedArray = []
    while (a.length > 0 && b.length > 0) {
        if (a[0] > b[0]) {
            const elementAtStart = b.shift()
            mergedArray.push(elementAtStart)

        }
        else {
            const elementAtStart = a.shift()
            mergedArray.push(elementAtStart)

        }

    }

    while (a.length > 0) {
        const element = a.shift()
        mergedArray.push(element)

    }

    while (b.length > 0) {
        const element = b.shift()
        mergedArray.push(element)

    }

    return mergedArray
}

let arr = [3, 3, 3, 3, 1, 1, 1, 4, 4, 4, 8, 8]

let arrNoDup = removeDuplicates(arr)

let arrSorted = mergeSort(arrNoDup)

console.log(arrSorted)