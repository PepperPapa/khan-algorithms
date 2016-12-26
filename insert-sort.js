// 插入排序：
// 1.Call insert to insert the element that starts at index 1 into the sorted subarray in index 0.
// 2.Call insert to insert the element that starts at index 2 into the sorted subarray in indices 0 through 1.
// 3.Call insert to insert the element that starts at index 3 into the sorted subarray in indices 0 through 2.
// 4.…
// 5.Finally, call insert to insert the element that starts at index n-1 n−1n, minus, 1 into the sorted subarray in indices 0 through n-2 n−2n, minus, 2.

// 实现在已排序的数组中插入一个值，插入值后的数组依然保持已排序状态
var insert = function(array, rightIndex, value) {
    for(var j = rightIndex; j >= 0 && array[j] > value; j--) {
        array[j + 1] = array[j];
    }   
    array[j + 1] = value; 
};

var insertionSort = function(array) {
  for (var i = 0; i < array.length - 1; i++) {
    insert(array, i, array[i + 1]);
  }
};

var array = [22, 11, 99, 88, 9, 7, 42];
insertionSort(array);
console.log("Array after sorting:  " + array);
