let arr = [5, 7, 9, 11, 15, 17, 19];

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

console.log(`Index: ${binarySearch(arr, 5)}`);

let arrPeople = [
  { name: 'John', age: 70 },
  { name: 'Anna', age: 15 },
  { name: 'Ann', age: 20 },
  { name: 'Misha', age: 17 },
];

arrPeople.sort(function (a, b) {
  if (a.age > b.age) {
    return 1;
  }
  if (a.age < b.age) {
    return -1;
  }
  if (a.age == b.age) {
    return 0;
  }
});
console.log(arrPeople);
let sourch = function (arr, num) {
  let left = 0;
  let right = arr.length - 1;
  let mid;
  while (left <= right) {
    mid = Math.round((right - left) / 2) + left;
    if (num === arr[mid].age) {
      return mid;
    } else if (num < arr[mid].age) {
      right = mid - 1;
    } else if (num > arr[mid].age) {
      left = mid + 1;
    }
  }
  return -1;
};
console.log(`Number object: ${sourch(arrPeople, 20)}`);
