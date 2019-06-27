function generateFibonacciSequence(n) {
  var fibo = [1, 1];
  if (n == 0) return null;
  if (n == 1) return fibo[n];
  for (var i = 2; i < n; i++) {
      fibo[i] =  fibo[i - 1] + fibo[i - 2];
  }
  return fibo;
}
document.getElementById("fbnc10").innerHTML = generateFibonacciSequence(10);
document.getElementById("fbnc7").innerHTML = generateFibonacciSequence(7);
document.getElementById("fbnc2").innerHTML = generateFibonacciSequence(2);
document.getElementById("fbnc1").innerHTML = generateFibonacciSequence(1);
document.getElementById("fbnc0").innerHTML = generateFibonacciSequence(0);

// function generateFibonacciSequence(n) {
//   var fibo = [1, 1];
//   if (n == 0) return null;
//   if (n == 1) return fibo[n];
//   for (var i = 2; i < n; i++)
//   fibo.push(fibo[i - 1] + fibo[i - 2])
//   return fibo;
// }
