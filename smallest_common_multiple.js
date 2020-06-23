/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

formula -->  LCM(a,b) = (a×b)/GCF(a,b)
        -->     gcd(a, b, c) = gcd(a, gcd(b, c)) = gcd(gcd(a, b), c) = gcd(gcd(a, c), b).
*/

function smallestCommons(arr) {
    
  const highNum = Math.max.apply(null, arr);    
  let lowNum = Math.min.apply(null, arr);

  const gcd = function(lowNum, highNum) {
    if (highNum == 0) {
      return lowNum;
    } else
      return gcd(highNum, lowNum % highNum)
  }

  const lcm = function(a,b) {
    return (a * b) / gcd(a, b);
  }

  let finalLCM = lowNum; 

  while (lowNum < highNum) {
    finalLCM = lcm(finalLCM, ++lowNum);
  }
  console.log(finalLCM);
  return finalLCM
}


smallestCommons([1,5]);


//smallestCommons([1, 5]) // should return a number.
//smallestCommons([1, 5]) // should return 60.
//smallestCommons([5, 1]) // should return 60.
//smallestCommons([2, 10]) // should return 2520.
//smallestCommons([1, 13]) // should return 360360.
smallestCommons([23, 18]) // should return 6056820.