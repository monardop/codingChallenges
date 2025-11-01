/**
 * binarySearch for index searching
 * @param array 
 * @param target 
 * @returns index or -1
 */
export function binarySearch(array: number[], target: number): number {
  const arrayLen = array.length;
  let left = 0,
      right = arrayLen - 1;
  let middle = Math.floor((left + right) / 2);

  while (left <= right) {
    if (array[middle] === target) return middle;
    else if (array[middle] > target) right = middle - 1;
    else left = middle + 1;

    middle = Math.floor((left + right) / 2);
  }

  return -1;
}
