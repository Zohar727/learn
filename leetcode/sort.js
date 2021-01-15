/**
 * bubble sort
 */

 function bubbleSort (arr) {
     let temp = 0;
     for (let i=0; i<arr.length; i++) {
         for (let j=0; j<arr.length - i; j++) {
             if (arr[j] > arr[j+1]) {
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
             }
         }
     }

     return arr;
 }

 /**
  * bubble sort2
  * add element changed tag
  */

function bubbleSort2 (arr) {
    let temp = 0;
    let isChange = false;
    for (let i=0; i<arr.length; i++) {
        for (let j=0; j<arr.length - i; j++) {
            if (arr[j] > arr[j+1]) {
                isChange = true;
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }

        if (!isChange) {
            break;
        }
    }

    return arr;
}

/**
 * bubble sort3
 * add element changed tag
 * add sorted border
 */

 function bubbleSort3 (arr) {
    let temp = 0;
    let isChange = false;
    let sortedIndex = arr.length - 1;
    let lastChanegIndex = 0;
    for (let i=0; i<arr.length; i++) {
        for (let j=0; j<=sortedIndex; j++) {
            if (arr[j] > arr[j+1]) {
                isChange = true;
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                lastChanegIndex = j;
                // sortedIndex = j;
            }
        }

        sortedIndex = lastChanegIndex;
        lastChanegIndex = 0;

        if (!isChange) {
            break;
        }
    }

    return arr;
}

/**
 * quicksort
 * 双向循环法
 */
function partition (arr, left, right) {
    let pivot = arr[left];
    let pivotIndex = left;
    let temp;
    while (left < right) {
        while (arr[right] >= pivot && right > left) {
            right--;
        }
        while (arr[left] <= pivot && left < right) {
            left++
        }

        temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;        
    }

    arr[pivotIndex] = arr[left];
    arr[left] = pivot;
    console.log(arr);
    return left;
}

function quicksort (arr, left, right) {
    if (left < right) {
        let middle = partition(arr, left, right);
        quicksort(arr, left, middle-1);
        quicksort(arr, middle+1, right);        
    }
}

function quicksortMain (arr) {
    quicksort(arr, 0, arr.length-1);
    return arr;
}

/**
 * quicksort
 * 单向循环法
 */


let testArr = [8, 2, 4, 9, 11, 3, 6 ];
//  console.log(bubbleSort([8, 2, 4, 9, 11, 3, 6 ]));
//  console.log(bubbleSort2([8, 2, 4, 9, 11, 3, 6 ]));
//  console.log(bubbleSort3([8, 2, 4, 9, 11, 3, 6 ]));
console.log(quicksortMain(testArr));


