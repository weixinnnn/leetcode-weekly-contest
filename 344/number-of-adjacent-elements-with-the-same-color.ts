/*
There is a 0-indexed array nums of length n. Initially, all elements are uncolored (has a value of 0).
You are given a 2D integer array queries where queries[i] = [indexi, colori].
For each query, you color the index indexi with the color colori in the array nums.
Return an array answer of the same length as queries where answer[i] is the number of adjacent elements with the same color after the ith query.
More formally, answer[i] is the number of indices j, such that 0 <= j < n - 1 and nums[j] == nums[j + 1] and nums[j] != 0 after the ith query.

Example 1:
Input: n = 4, queries = [[0,2],[1,2],[3,1],[1,1],[2,1]]
Output: [0,1,1,0,2]

Example 2:
Input: n = 1, queries = [[0,100000]]
Output: [0]
*/

const colorTheArray = (n: number, queries: number[][]): number[] => {
  const colorArr = Array(n);
  const adjacentElements = Array(queries.length).fill(0);
  let count = 0;

  queries.forEach(([index, color], i) => {
    const prevColor = colorArr[index];
    colorArr[index] = color;

    if (prevColor === color) {
      adjacentElements[i] = count;
      return;
    }

    if (count && prevColor && colorArr[index - 1] === prevColor) count--;
    if (count && prevColor && colorArr[index + 1] === prevColor) count--;

    if (colorArr[index - 1] === color) count++;
    if (colorArr[index + 1] === color) count++;

    adjacentElements[i] = count;
  });

  return adjacentElements;
};
