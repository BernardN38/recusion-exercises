/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) return 1;
  else {
    return nums[0] * product(nums.slice(1));
  }
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 1) {
    return words[0].length;
  }
  let checkWordLength = longest(words.slice(1));
  if (words[0].length > checkWordLength) {
    return words[0].length;
  } else {
    return checkWordLength;
  }
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length <= 2) return str[0];
  return str[0] + everyOther(str.slice(2));
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function makePalindrom(str) {
  if (str.length <= 1) return str[0];
  return makePalindrom(str.slice(1)) + str[0];
}
function isPalindrome(str) {
  const palindrome = makePalindrom(str);
  return palindrome == str;
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, index = 0) {
  if (arr[0] === val) {
    return index;
  } else if (index > arr.length) {
    return -1;
  }
  if (arr.length <= 1) return arr[0];
  return findIndex(arr.slice(1), val, index + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str.length <= 1) return str[0];
  return revString(str.slice(1)) + str[0];
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let result = [];
  for (key of Object.keys(obj)) {
    if (typeof obj[key] === "object") {
      result = [...result, ...gatherStrings(obj[key])];
    } else if (typeof obj[key] === "string") {
      result.push(obj[key]);
    }
  }
  return result;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {
  let mid = Math.floor(arr.length / 2);
  let left = 0
  let right = arr.length-1
  if (arr.length === 1 && arr[0] != val) {
    return -1;
  }
  if (val === arr[mid]) {
    return mid;
  }
  if (val === arr[left]){
    return left
  }
  if (val === arr[right]){
    return right
  }
  if (val === arr[mid]) {
    return mid;
  } else if (val < arr[mid]) {
    return binarySearch(arr.slice(0, mid), val);
  } else if (val > arr[mid]) {
    return binarySearch(arr.slice(mid), val);
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
