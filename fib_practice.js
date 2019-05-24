Write a function that takes n as a parameter, and returns a list containing the first n Fibonacci Numbers.

fibonacci(8) → [1, 1, 2, 3, 5, 8, 13, 21]

function fib(n) {
  if (n <= 1) {
    return n;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}
