/*
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.
*/

// ASCII Table Range
// a - z
// 97 - 122 



function fearNotLetter(str) { 
    let start = str.charCodeAt(0);
    let end = str.charCodeAt(str.length - 1);

    for (let i = 0; i < end-start; i++) {
        //console.log(str.charCodeAt(i));
        if (str.charCodeAt(i) == str.charCodeAt(i - 1) + 2) {
            let missing = (str.charCodeAt(i - 1 ) + 1);
            return String.fromCharCode(missing);
        }
    }
  }
  
  fearNotLetter("abce");
  

//fearNotLetter("abce") // should return "d".
//fearNotLetter("abcdefghjklmno") // should return "i".
//fearNotLetter("stvwx") // should return "u".
//fearNotLetter("bcdf") // should return "e".
//fearNotLetter("abcdefghijklmnopqrstuvwxyz") // should return undefined.