// LoadingWrapper.js
import React, { useEffect, useState } from 'react';

//Pages...
import TransitionPage from '../pages/TransitionPage';

const LoadingWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the delay time here

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  return (
    <>
      {isLoading ? (
        <TransitionPage/> // Or your TransitionPage component
      ) : (
        children
      )}
    </>
  );
};

export default LoadingWrapper;
