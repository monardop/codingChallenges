/**
 * Given a set of distinct integers, print the size of a maximal subset of  S
 * where the sum of any 2 numbers in S' is not evenly divisible by k.
 *
 * @param {number} k division number
 * @param {number} s array of numbers
 * @returns {number} amount of elements founded
 */

export function nonDivisibleSubset(k: number, s: number[]): number {
  const count = new Array(k).fill(0);

  // contar restos
  for (const num of s) {
    count[num % k]++;
  }

  // resto 0: máximo 1
  let result = Math.min(1, count[0]);

  // mitad exacta si k es par: máximo 1
  const limit = Math.floor(k / 2);

  for (let r = 1; r <= limit; r++) {
    if (r === k - r) {
      // resto k/2
      result += Math.min(1, count[r]);
    } else {
      // elegir el grupo más grande
      result += Math.max(count[r], count[k - r]);
    }
  }

  return result;
}
nonDivisibleSubset(4, [19, 10, 12, 10, 24, 25, 22]);
