//Remove all falsy values from an array.
//Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

function bouncer(arr) {
    var newArr = arr.filter(Boolean)
    console.log(newArr);  
    return newArr;
}
bouncer([7, "ate", "", false, 9]);

