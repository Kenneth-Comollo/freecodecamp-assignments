//Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
//

function truncateString(str, num) {
    if (str.length > num) {
      var newString = str.substring(0, num);
      newString = newString + "...";
    } else {
      newString = str;
    }
    return newString;
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);