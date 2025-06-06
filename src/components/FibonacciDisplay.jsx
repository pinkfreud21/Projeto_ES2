import { useState, useEffect } from 'react';
import { generateFibonacciSequence } from '../utils/fibonacci';
import '../styles/FibonacciDisplay.css';

const FibonacciDisplay = () => {
  const [fibSequence, setFibSequence] = useState([]);
  
  useEffect(() => {
    // Generate the first 5 Fibonacci numbers
    const sequence = generateFibonacciSequence(5);
    setFibSequence(sequence);
  }, []);

  return (
    <div className="fibonacci-container">
      <h2>Fibonacci Sequence</h2>
      <p className="description">The first 5 numbers of the Fibonacci sequence:</p>
      <div className="fibonacci-numbers">
        {fibSequence.map((number, index) => (
          <div 
            key={index} 
            className="fibonacci-number"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {number}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FibonacciDisplay;