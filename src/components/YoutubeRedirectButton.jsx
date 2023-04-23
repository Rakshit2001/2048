import React from 'react';

const YoutubeRedirectButton = () => {
  const handleButtonClick = () => {
    window.location.href = 'https://www.youtube.com/watch?v=kQhkkqjGkFA';
  };
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // height: '100vh', // Set the height of the container to center the button vertically
  };

  const buttonStyle = {
    backgroundColor: '#673AB7',
    color: '#fff',
    padding: '12px 24px',
    fontSize: '16px',
    borderRadius: '25px',
    cursor: 'pointer',
    fontFamily: '"Clear Sans", sans-serif',
   
  };

  return (
      <div style={containerStyle}>
    <button onClick={handleButtonClick} style={buttonStyle}>
      More About Game
    </button>
    </div>
  );
};

export default YoutubeRedirectButton;
