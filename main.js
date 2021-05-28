function bubbleSort(arr) {
    let swapped;

    do {
        swapped = false
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp

                swapped = true
            }

        }
    } while (swapped)
}


function removeDuplicates(arr) {
    let arrNoDup = []

    arr.forEach(element => {
        if (!arrNoDup.includes(element)) {
            arrNoDup.push(element)
        }
    })

    return arrNoDup
}
const arr = [2, -4, 19, 10, 5, 7, 2, -4]

const arrNoDup = removeDuplicates(arr)

console.log(arrNoDup)