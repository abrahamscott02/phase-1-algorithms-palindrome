function isPalindrome(str) {
  let rev = str.split("").reverse().join("");

  if (rev === str){
    return true
  } else {
    return false
  }
}
console.log(isPalindrome("abel"));

/* 
  Add your pseudocode here
  
  Declare a function called isPalindrome, that takes a string "str", as an argument. 
  Within the function create a varible, that will represent the reverse "Rev" of the entered string
  To reverse the string we will use "split", to make every letter in the string, a item in a array
  Then we will "Reverse" each letter so its flipped and then use "Join", to add all back together into one string
  Next, we will create a "if" statement, where we will see if ("str" our entered string) is === to (rev, which is the same string but in reverse)
  Then, we will call our function 
*/

/*
  Add written explanation of your solution here

  Create a function, that takes a string as a argument, then create a variable, that takes the entered string 
  and reverse it by first taking each letter in the string and splitting it, then reverse it and join it back together.
  Then make in if statement, with str === rev as the condition and have it return true if they are and vice versa if they arn't.
  then call the function at the end and enter a name
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
