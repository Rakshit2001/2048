import React, { useState, useEffect } from 'react';
import '../components/timer.css'

const Timer = () => {
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setElapsedTime(Date.now() - startTime);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning, startTime]);

  useEffect(() => {
    startTimer(); // Start the timer when the component mounts
  }, []); // Empty dependency array

  const startTimer = () => {
    if (!isRunning) {
      setStartTime(Date.now());
      setIsRunning(true);
    }
  };

  const stopTimer = () => {
    if (isRunning) {
      setIsRunning(false);
    }
  };

  const resetTimer = () => {
    setStartTime(null);
    setElapsedTime(0);
    setIsRunning(false);
  };

  const formatTime = (time) => {
    const seconds = Math.floor(time / 1000);
    const minutes = Math.floor(seconds / 60);
    const formattedTime = `${minutes}:${(seconds % 60)
      .toString()
      .padStart(2, '0')}`;
    return formattedTime;
  };

  return (
    <div>
      <div>Elapsed Time: {formatTime(elapsedTime)}</div>
      {/* <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button> */}
    </div>
  );
};

export default Timer;
