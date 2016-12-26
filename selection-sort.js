// 数组firstIndex和secondIndex对应序号的值互换
var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

// 返回数组中以startIndex序号起始的子数组的最小值的序号
var indexOfMinimum = function(array, startIndex) {

    var minValue = array[startIndex];
    var minIndex = startIndex;

    for(var i = minIndex + 1; i < array.length; i++) {
        if(array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }
    }
    return minIndex;
};

/*
* 选择排序：
* 1. 从序号0开始，查找其他的子数组的最小值的序号，并和序号0的值交换。
* 2. 序号0不断加1，直到序号达到整个数组的长度length - 1
*/
var selectionSort = function(array) {
    var firstIndex = 0;
    for (var i = firstIndex; i < array.length; i++) {
        var secondIndex = indexOfMinimum(array, i);
        swap(array, i, secondIndex);
    }
};

var array = [22, 11, 99, 88, 9, 7, 42];
selectionSort(array);
console.log("Array after sorting:  " + array);
console.log(array.toString() == [7, 9, 11, 22, 42, 88, 99].toString());

var array1 = [9, 89, 1, 33, 34, 7, 87, 9];
selectionSort(array1);
console.log("Array after sorting:  " + array1);
console.log(array1.toString() == [1, 7, 9, 9, 33, 34, 87, 89].toString());
