let arr = [1, 2, 3, 4, 5, 8, 9, 11, 15, 18]

function binarySearch(arr, target) {
  let low = 0,
    high = arr.length - 1,
    mid
  while (low <= high) {
    mid = Math.floor((low + high) / 2)
    if (target === arr[mid]) {
      return `find ${target} at ${mid + 1}`
    }
    if (target > arr[mid]) {
      low = mid + 1
    } else if (target < arr[mid]) {
      high = mid - 1
    }
  }
  return -1
}
console.log(binarySearch(arr, 8))

function binarySearch1(arr, target, low = 0, high = arr.length - 1) {
  const index = Math.floor((low + high) / 2),
    curr = arr[index]
  if (curr === target) {
    return `find ${target} at ${index + 1}`
  } else if (curr > target) {
    return binarySearch1(arr, target, low, index - 1)
  } else if (curr < target) {
    return binarySearch1(arr, target, index + 1, high)
  }
  return -1
}
console.log(binarySearch1(arr, 8))
