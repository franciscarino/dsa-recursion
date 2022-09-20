/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) return 1;

  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

//["a", "ab", "abc"]

function longest(words) {
  // base case: length === 0
  // variable for longest word, update as we recurse
  // progess with words.slice(1);
  // return longestWord.length

  if (words.length === 0) return 0; // empty array []

  return Math.max(words[0].length, longest(words.slice(1)));
}

/** everyOther: return a string with every other letter. */

//"hello" // "hlo"

function everyOther(str) {
  if (str.length === 0) return "";

  return str[0] + everyOther(str.slice(2));
}

/** find: return boolean depending on if val exists in array or not. */

function find(arr, val) {
  if (arr.length === 0) return false;

  if (arr[0] === val) return true;

  return find(arr.slice(1), val);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str[0] !== str[str.length - 1]) return false;

  if (str.length <= 1) return true;

  return isPalindrome(str.slice(1, str.length - 1));
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, out = "", i = 0) {
  if (str.length === i) return out;

  out = out + str[str.length - 1 - i];

  return revString(str, out, i + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  if (arr.length === i) return -1;

  if (arr[i] === val) return i;

  return findIndex(arr, val, i + 1);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, out = []) {
  if (Object.keys(obj).length === 0 ) return out;
  for (let key in obj) {
    if (typeof obj[key] === "string") out.push(obj[key]);
    if (typeof obj[key] === "object") gatherStrings(obj[key], out);

    delete obj[key];
    return gatherStrings(obj, out);
  }
}

// FURTHER STUDY

/** binarySearch: given a sorted array of numbers, and a value,
 * return true if val is in array, false if not present).
 * O(log(N))
 */

function binarySearch(arr, val, leftPointer=0, rightPointer=arr.length-1) {
  if (leftPointer > rightPointer) return false;

  let middlePointer = Math.floor((leftPointer + rightPointer) / 2);

  if (arr[middlePointer] === val) return true;
  if (arr[middlePointer] > val) rightPointer = middlePointer - 1;
  if (arr[middlePointer] < val) leftPointer = middlePointer + 1;
  return binarySearch(arr, val, leftPointer, rightPointer);
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present).
 * ([1, 2, 3, 4], 0)).toEqual(-1); */

function binarySearchIndex(arr, val, leftPointer=0, rightPointer=arr.length-1) {
  if (leftPointer > rightPointer) return - 1;

  let middlePointer = Math.floor((leftPointer + rightPointer) / 2);

  if (arr[middlePointer] === val) return middlePointer;
  if (arr[middlePointer] > val) rightPointer = middlePointer - 1;
  if (arr[middlePointer] < val) leftPointer = middlePointer + 1;
  return binarySearchIndex(arr, val, leftPointer, rightPointer);
}

// you might find the above two problems easier if you change the function signature to:
//
// function binarySearch(arr, val, left = 0, right = arr.length) {
//
// }

module.exports = {
  product,
  longest,
  everyOther,
  find,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
  binarySearchIndex,
};
