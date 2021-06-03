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

const arr = [5, 5, 5, 3, 2, 2, 3, 1, 1, 1]

const arrNoDup = removeDuplicates(arr)

insertionSort(arrNoDup)

console.log(arrNoDup)