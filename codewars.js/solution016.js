/*
Write a function that checks if a given string (case insensitive) is a palindrome. */

function isPalindrome(x) {
  let newX = x.toLowerCase();
  return newX === newX.split("").reverse().join("");
}
