import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [fibSequence, setFibSequence] = useState([]);

  useEffect(() => {
    const generateFibonacci = (n) => {
      const sequence = [0, 1];
      for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
      }
      return sequence;
    };

    setFibSequence(generateFibonacci(5));
  }, []);

  return (
    <div className="app-container">
      <h1>Fibonacci Sequence</h1>
      <div className="fibonacci-numbers">
        {fibSequence.map((number, index) => (
          <div key={index} className="number">
            {number}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App