// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".



function titleCase(str) {
    var lower = str.toLowerCase();
    lower = lower.replace(/(^|\s)\S/g, X => X.toUpperCase());
    console.log(lower);
    return lower;
  }
  
  

  titleCase("I'm a little tea pot");