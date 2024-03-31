// Recursive function to generate Fibonacci sequence
function fibonacci(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;

  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
}

// Function to generate Fibonacci sequence up to specified terms
function generateFibonacciSequence(terms) {
  const sequence = [];
  for (let i = 0; i < terms; i++) {
    sequence.push(fibonacci(i));
  }
  return sequence;
}

// Example usage:
const numberOfTerms = 10;
const fibonacciSequence = generateFibonacciSequence(numberOfTerms);
console.log(`Fibonacci sequence up to ${numberOfTerms} terms:`);
console.log(fibonacciSequence);
