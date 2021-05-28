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

const arr = [2, -4, 19, 10, 5, 7]


bubbleSort(arr)

console.log(arr)