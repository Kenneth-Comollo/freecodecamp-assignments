//Find the longest word in a string

function findLongestWordLength(str) {
    var stringArray = str.split(" ");
    let greatestLength = 0;
    for (let i = 0; i < stringArray.length; i++) {
        if (stringArray[i].length > greatestLength) {
            greatestLength = stringArray[i].length;
        }
    }
    console.log(greatestLength);
    return str.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");