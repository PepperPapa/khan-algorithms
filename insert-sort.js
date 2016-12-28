// 插入排序：
// 1.Call insert to insert the element that starts at index 1 into the sorted subarray in index 0.
// 2.Call insert to insert the element that starts at index 2 into the sorted subarray in indices 0 through 1.
// 3.Call insert to insert the element that starts at index 3 into the sorted subarray in indices 0 through 2.
// 4.…
// 5.Finally, call insert to insert the element that starts at index n-1 n−1n, minus, 1 into the sorted subarray in indices 0 through n-2 n−2n, minus, 2.

// 实现在已排序的数组中插入一个值，插入值后的数组依然保持已排序状态
var insert = function(array, rightIndex, value) {
    // 遍历数组，将数组中的值依次复制到下一个序号，知道value大于或等于数组中的某个值
    for(var j = rightIndex; j >= 0 && array[j] > value; j--) {
        array[j + 1] = array[j];
    }
    /*
     * 1. 如果value大于array中的所有值，则i就等于rightIndex
     * 2. 如果value小于array中的所有值，则i等于0
     * 3. 如果value的大小在array的中间，则i等于中间的某个正确的序号值
     */
    array[j + 1] = value; 
};

/*
 * 插入排序： 可以认为是从序号0开始，依次对数组插入一个数值，并始终保持排序状态
 */
var insertionSort = function(array) {
  for (var i = 0; i < array.length - 1; i++) {
    insert(array, i, array[i + 1]);
  }
};

var array = [22, 11, 99, 88, 9, 7, 42];
insertionSort(array);
console.log("Array after sorting:  " + array);
