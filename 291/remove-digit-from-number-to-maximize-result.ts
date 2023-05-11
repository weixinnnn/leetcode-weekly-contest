/*
You are given a string number representing a positive integer and a character digit.
Return the resulting string after removing exactly one occurrence of digit from number such that the value of the resulting string in decimal form is maximized. 
The test cases are generated such that digit occurs at least once in number.

Examples;
Input: number = "123", digit = "3"
Output: "12"

Input: number = "1231", digit = "1"
Output: "231"

Input: number = "551", digit = "5"
Output: "51"

Input: number = "2998589353917872714814599237991174513476623756395992135212546127959342974628712329595771672911914471", digit = "3"
Output: "2998589353917872714814599237991174513476623756395992135212546127959342974628712329595771672911914471"

Constraints:
  2 <= number.length <= 100
  number consists of digits from '1' to '9'.
  digit is a digit from '1' to '9'.
  digit occurs at least once in number.
*/

const removeDigit = (number: string, digit: string): string => {
  let index = 0;

  for (let i = 0; i < number.length; i++) {
    if (number[i] === digit) {
      index = i;
      if (number.charAt(i + 1) > digit) break;
    }
  }

  return number.slice(0, index) + number.slice(index + 1);
};
