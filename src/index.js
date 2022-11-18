let arr = [1, 2, 3, 4, 5];

function binarySearch(array, num) {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (array[mid] === num) {
      return mid;
    } else if (array[mid] < num) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

console.log(`Index: ${binarySearch(arr, 2)}`);
