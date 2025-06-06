/**
 * Calculates the first n numbers in the Fibonacci sequence
 * @param {number} n - Number of Fibonacci numbers to generate
 * @returns {number[]} Array containing the first n Fibonacci numbers
 */
export const generateFibonacciSequence = (n) => {
  if (n <= 0) return [];
  if (n === 1) return [0];
  
  const sequence = [0, 1];
  
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  
  return sequence;
};

/**
 * Gets a specific Fibonacci number at position n
 * @param {number} n - Position in the Fibonacci sequence (0-based)
 * @returns {number} The Fibonacci number at position n
 */
export const getFibonacciNumber = (n) => {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  
  let a = 0;
  let b = 1;
  let result = 0;
  
  for (let i = 2; i <= n; i++) {
    result = a + b;
    a = b;
    b = result;
  }
  
  return result;
};