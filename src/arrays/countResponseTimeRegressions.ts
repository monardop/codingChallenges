/**
 * Given an array of positive integers, return the number of elements
 * that are strictly greater than the average of all previous elements.
 * Skip the first element.
 *
 * @param { number[] } responseTimes
 * @returns { number }
 */

export function countResponseTimeRegressions(responseTimes: number[]): number {
  let answer = 0;
  const arrayLen = responseTimes.length;

  const avg = (array: number[]) => {
    let initialValue = 0;
    return array.reduce((prev, current) => prev + current, initialValue) / array.length;
  };

  for (let i = 1; i < arrayLen; i++) {
    const avgValue = avg(responseTimes.slice(0, i));
    if (responseTimes[i] > avgValue) answer++;
  }

  return answer;
}
