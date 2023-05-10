/*
You are given an integer array cards where cards[i] represents the value of the ith card. 
A pair of cards are matching if the cards have the same value.
Return the minimum number of consecutive cards you have to pick up to have a pair of matching cards among the picked cards. 
If it is impossible to have matching cards, return -1.

Examples:
Input: cards = [3,4,2,3,4,7]
Output: 4

Input: cards = [1,0,5,3]
Output: -1

Input: cards = [77,10,11,51,69,83,33,94,0,42,86,41,65,40,72,8,53,31,43,22,9,94,45,80,40,0,84,34,76,28,7,79,80,93,20,82,36,74,82,89,74,77,27,54,44,93,98,44,39,74,36,9,22,57,70,98,19,68,33,68,49,86,20,50,43]
Output: 3

Constraints
  1 <= cards.length <= 105
  0 <= cards[i] <= 106
*/

const minimumCardPickup = (cards: number[]) => {
  let min = -1;

  cards.reduce<Record<number, number>>((acc, c, i) => {
    if (acc[c] !== undefined) {
      const distance = i - acc[c] + 1;
      if (min === -1 || distance < min) {
        min = distance;
      }
    }
    acc[c] = i;
    return acc;
  }, {});

  return min;
};
