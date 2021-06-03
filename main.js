function removeDuplicates(arr) {

    let uniqueArr = arr.filter((element, index) => arr.indexOf(element) === index)

    return uniqueArr
}

function insertionSort(arr) {
    let holePosition, key

    for (let i = 1; i < arr.length; i++) {
        key = arr[i]
        holePosition = i

        while (holePosition > 0 && arr[holePosition - 1] > key) {
            arr[holePosition] = arr[holePosition - 1]
            holePosition -= 1
        }

        arr[holePosition] = key

    }

}

function removeDuplicatesAndSort(arr) {
    let arrNoDup = removeDuplicates(arr)

    insertionSort(arrNoDup)

    return arrNoDup
}

const arr = [5, 5, 5, 3, 2, 2, 3, 1, 1, 1]

let arrOrg = removeDuplicatesAndSort(arr)


console.log(arrOrg)