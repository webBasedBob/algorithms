// TASK 1 Microsoft
// ASTA  E REZOLVAT BINE, DAR E GORE PROGRAMMING AICIA - DECI ARATA CA DRACU
// function solution(A) {
//   let result = 0;
//   let startingPoint;
//   //setting starting point - the index to start checking for valid pairs
//   //if first and last elm sum not even, start at index 0
//   if ((A[0] + A[A.length - 1]) % 2 !== 0) {
//     startingPoint = 0;
//   } else {
//     //if it is even, than search for first elm that has no neighbour to form a valid sum with
//     for (let index = 1; index < A.length - 2; index++) {
//       if (
//         (A[index] + A[index - 1]) % 2 !== 0 &&
//         (A[index] + A[index + 1]) % 2 !== 0
//       ) {
//         startingPoint = index;
//         break;
//       }
//     }
//     //if no number of that kind is found, set starting point to 0
//     if (startingPoint === undefined) {
//       startingPoint = 0;
//     } else {
//       result++;
//     }
//   }
//   //to check for valid pairs, i use 2 pointers and an iterative method
//   let left = startingPoint;
//   let right = left + 1;
//   let step;
//   while (left !== undefined && right !== undefined && right !== startingPoint) {
//     if ((A[left] + A[right]) % 2 === 0) {
//       result++;
//       step = 2;
//     } else {
//       step = 1;
//     }
//     //check if we reached the end of the array and reset the pointers to the start of the array if needed
//     //else break the loop
//     if (A[left + step] !== undefined) {
//       left += step;
//     } else {
//       if (0 < startingPoint) {
//         left = 0;
//       } else {
//         left = undefined;
//       }
//     }
//     if (A[right + step] !== undefined) {
//       right += step;
//     } else {
//       if (1 < startingPoint) {
//         right = step;
//       } else {
//         right = undefined;
//       }
//     }
//   }
//   return result;
// }

// solution([12321, 4214, 245365, 46423, 43232, 1, 23, 432, 2, 3, 4, 5, 6, 7]);

// TASK 2 MIcrosoft
//ASTA NU L-AM REZOLVAT, N-AM STIUT CUM, L-AM LASAT IN PULA CU SATELITU
// function solution(A, B) {
//   // this seems a job for dynamic programming - I don't know dynamic programming :(
//   // if one's length is more that  6 times bigger than the other, the task is imposible
//   if (A.length > 6 * B.length || B.length > 6 * A.length) {
//     return -1;
//   }
//   let minTurnsNo = 0;
//   const sumsDifference =
//     A.reduce((acc, curr) => {
//       return acc + curr;
//     }, 0) -
//     B.reduce((acc, curr) => {
//       return acc + curr;
//     }, 0);

//   let hashOne = {};
//   let hashTwo = {};
//   A.forEach((int) => {
//     const diffToOne = 1 - int;
//     const diffToSix = 6 - int;
//     if (hashOne[diffToOne]) {
//       hashOne[diffToOne] = +1;
//     } else {
//       hashOne[diffToOne] = 1;
//     }
//     if (hashOne[diffToSix]) {
//       hashOne[diffToSix] = +1;
//     } else {
//       hashOne[diffToSix] = 1;
//     }
//   });
//   B.forEach((int) => {
//     const diffToOne = 1 - int;
//     const diffToSix = 6 - int;
//     if (hashTwo[diffToOne]) {
//       hashTwo[diffToOne] = +1;
//     } else {
//       hashTwo[diffToOne] = 1;
//     }
//     if (hashTwo[diffToSix]) {
//       hashTwo[diffToSix] = +1;
//     } else {
//       hashTwo[diffToSix] = 1;
//     }
//   });
//   //do some magic and find how mani turns are needed
//   return minTurnsNo;
// }

// solution([5], [1, 1, 6]);

// TASK 3 microsoft
//ASTA E REZOLVAT BINE, E SI CLEAN, ASTA POT SA ZIC CA E CE TREBE
// function solution(S) {
//   //use a JS obj to store unique diagrams as keys and an array of first letter's index of each appearance
//   let hash = {};
//   for (let i = 0; i < S.length - 1; i++) {
//     let currDiagram = `${S[i]}${S[i + 1]}`;
//     if (!hash[currDiagram]) {
//       hash[currDiagram] = [i];
//     } else {
//       hash[currDiagram].push(i);
//     }
//   }
//   let maxdif = -1;
//   //iterate through the obj and find the maximum "distance" for each diagram
//   for (let diagram in hash) {
//     const indeces = hash[diagram];
//     //exclude single appearance diagrams
//     if (indeces.length > 1) {
//       //find max distance and update the global max distance if the local one is greater
//       const min = Math.min(...indeces);
//       const max = Math.max(...indeces);
//       const currMaxDif = max - min;
//       maxdif = Math.max(maxdif, currMaxDif);
//     }
//   }
//   return maxdif;
// }

// solution(`aakmaakmakda`);

//task 4 microsoft
//NICI N-ARE ROST
import { it, expect, describe } from "vitest";

it("tests if the testing works", () => {
  expect(1).toBe(1);
});
