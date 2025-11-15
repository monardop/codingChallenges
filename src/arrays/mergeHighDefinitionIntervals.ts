"use strict";
/*
 * Given an array of intervals [startTime, endTime], merge all
 * overlapping intervals and return a sorted array of non-overlapping
 * intervals.
 *
 * @return { number [][] }
 *
 */

// export function mergeHighDefinitionIntervals(intervals: number[][]): number[][] {
//   intervals.sort((a, b) => a[0] - b[0]);

//   for (let i = 0; i < intervals.length - 1; i++) {
//     if (intervals[i][1] > intervals[i + 1][0]) {
//       const auxElement = [intervals[i][0], intervals[i + 1][1]];
//       intervals = [...intervals.splice(0, i), auxElement, ...intervals.splice(i + 2, -1)];
//     }
//   }
//   return intervals;
// }

export function mergeHighDefinitionIntervals(intervals: number[][]): number[][] {
  if (intervals.length === 0) return [];

  return intervals
    .sort((a, b) => a[0] - b[0])
    .reduce((merged: number[][], current) => {
      const last = merged[merged.length - 1];

      if (last && current[0] <= last[1]) {
        last[1] = Math.max(last[1], current[1]);
      } else {
        merged.push(current);
      }

      return merged;
    }, []);
}
