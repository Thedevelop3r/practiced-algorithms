// Given two strings s and t, both consisting of lowercase English letters and digits,
//your task is to calculate how many ways exactly one digit could be removed
//from one of the strings so that s is lexicographically smaller than t
//after the removal. Note that we are removing only a single instance of
//a single digit, rather than all instances
//(eg: removing 1 from the string a11b1c could result in a1b1c or a11bc, but not abc).

// Also note that digits are considered lexicographically smaller than letters.

function solution(s, t) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (/\d/.test(s[i])) {
      const stringS = s.slice(0, i) + s.slice(i + 1);
      if (stringS < t) {
        count++;
      }
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (/\d/.test(t[i])) {
      const stringT = t.slice(0, i) + t.slice(i + 1);
      if (s < stringT) {
        count++;
      }
    }
  }
  return count;
}

// Given an array of integers a, your task is to find how many of its contiguous subarrays of length m contain a pair of integers with a sum equal to k.

// More formally, given the array a, your task is to count the number of indices 0 ≤ i ≤ a.length - m such that a subarray [a[i], a[i + 1], ..., a[i + m - 1]] contains at least one pair (a[s], a[t]), where:

// s ≠ t
// a[s] + a[t] = k
// Example

// For a = [2, 4, 7, 5, 3, 5, 8, 5, 1, 7], m = 4, and k = 10, the output should be solution(a, m, k) = 5.

// Let's consider all subarrays of length m = 4 and see which fit the description conditions:

// Subarray a[0..3] = [2, 4, 7, 5] doesn't contain any pair of integers with a sum of k = 10. Note that although the pair (a[3], a[3]) has the sum 5 + 5 = 10, it doesn't fit the requirement s ≠ t.
// Subarray a[1..4] = [4, 7, 5, 3] contains the pair (a[2], a[4]), where a[2] + a[4] = 7 + 3 = 10.
// Subarray a[2..5] = [7, 5, 3, 5] contains two pairs (a[2], a[4]) and (a[3], a[5]), both with a sum of k = 10.
// Subarray a[3..6] = [5, 3, 5, 8] contains the pair (a[3], a[5]), where a[3] + a[5] = 5 + 5 = 10.
// Subarray a[4..7] = [3, 5, 8, 5] contains the pair (a[5], a[7]), where a[5] + a[7] = 5 + 5 = 10.
// Subarray a[5..8] = [5, 8, 5, 1] contains the pair (a[5], a[7]), where a[5] + a[7] = 5 + 5 = 10.
// Subarray a[6..9] = [8, 5, 1, 7] doesn't contain any pair with a sum of k = 10.
// So the answer is 5, because there are 5 contiguous subarrays that contain a pair with a sum of k = 10.

// For a = [15, 8, 8, 2, 6, 4, 1, 7], m = 2, and k = 8, the output should be solution(a, m, k) = 2.

// There are 2 subarrays satisfying the description conditions:

// a[3..4] = [2, 6], where 2 + 6 = 8
// a[6..7] = [1, 7], where 1 + 7 = 8
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.integer a

// The given array of integers.

// Guaranteed constraints:
// 2 ≤ a.length ≤ 105,
// 0 ≤ a[i] ≤ 109.

// [input] integer m

// An integer representing the length of the contiguous subarrays being considered.

// Guaranteed constraints:
// 2 ≤ m ≤ a.length.

// [input] integer k

// An non-negative integer value representing the sum of the pairs we're trying to find within each subarray.

// Guaranteed constraints:
// 0 ≤ k ≤ 109.

// [output] integer

// An integer representing the number of subarrays that contain a pair of integers with a sum of k.

function solution(a, m, k) {
  let count = 0;
  for (let i = 0; i <= a.length - m; i++) {
    let subarray = a.slice(i, i + m);
    let pairs = new Set();
    for (let j = 0; j < subarray.length; j++) {
      let complement = k - subarray[j];
      if (pairs.has(complement)) {
        count++;
        break;
      }
      pairs.add(subarray[j]);
    }
  }
  return count;
}

// my algorither for century detection opetion 1

function solution(year) {
  // 1300/13 == 100
  const YEAR = typeof year === 'string' ? Number(year) : year;
  const isCentury = YEAR >= 100;
  //Globals
  const MAX_Limit = YEAR;
  let result = 0;
  if (isCentury) {
    const counter = {};
    (counter.loop1 = 0), (counter.loop2 = 0), (counter.mainloop = 0);
    for (let i = MAX_Limit; i > 0; i--) {
      counter.mainloop += 1;
      if (YEAR / i === 100 || YEAR / i === 100.0) {
        // i is the returned century
        counter.loop1 += 1;
        result = i;
        break;
      } else if (YEAR / i > 100.0) {
        // i+1 is the century
        counter.loop2 += 1;
        result = i + 1;
        break;
      }
    }
    console.log(counter);
    return result;
  } else {
    return 1;
  }
}

// option 2

function getCentury(year) {
  return Math.ceil(year / 100);
}

const centuries = [];
let currentC = 0;

for (let x = 0; x < 2023; x++) {
  // console.log(`-----------------------------------------`)
  // console.log(`\nGETCENTURY:\n year:${x} Century-> ${getCentury(x)} \n`);
  // //...
  // console.log(`\nSolution:\n year:${x} Century-> ${solution(x)} \n`);

  if (getCentury(x) !== currentC) {
    currentC = getCentury(x);
    centuries.push({ year: x, century: getCentury(x) });
  }
  // console.log(`-----------------------------------------`)
}

console.log(`------------------****-----------------------`);

console.log(centuries);

// palindrom string

const solution = (inputString) => inputString === inputString.split('').reverse().join('');
