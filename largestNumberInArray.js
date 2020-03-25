function largestNumberInArray(arr) {
    var results = [];
    for (var i = 0; i < arr.length; i++) {
        var highestNumber = arr[i][0];
        for (var n = 1; n < arr[i].length; n++) {
            if (arr[i][n] > highestNumber) {
                highestNumber = arr[i][n];
            }
        }
        results[i] = highestNumber;
    } 
    
    console.log(results);
    return results;
}

largestNumberInArray([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
