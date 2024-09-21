//React...
import {useState, useEffect} from 'react';

const NumberCounter = ({ targetNumber, duration, number }) => {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      const incrementTime = duration / targetNumber;
  
      const counter = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount < targetNumber) {
            return prevCount + 1;
          } else {
            clearInterval(counter);
            return prevCount;
          }
        });
      }, incrementTime);
  
      return () => clearInterval(counter);
    }, [targetNumber, duration]);
  
    return <h2 className={number}>{count}</h2>;
  };

export default NumberCounter;