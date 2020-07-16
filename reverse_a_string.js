/*
Reverse the provided string.
You may need to turn the string into an array before you can reverse it.
Your result must be a string.
*/

function reverseString(str) {
    let revStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        revStr += str[i];
    }
    console.log(revStr);
  return revStr;
}

reverseString("hello");

//reverseString("hello") //should return a string.
//reverseString("hello") //should become "olleh".
//reverseString("Howdy") //should become "ydwoH".
//reverseString("Greetings from Earth") //should return "htraE morf sgniteerG".