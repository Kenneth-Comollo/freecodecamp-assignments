//Remove all falsy values from an array.
//Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

function bouncer(arr) {
for (var i= 0; i <= arr.length; i++) {
    if (arr[i] == false) {
        arr.splice(i, i);
    } else {
        continue;
    }  
}
    console.log(arr);  
    return arr;
}
bouncer([7, "ate", "", false, 9]);

