import React from 'react';

function Test() {
  // Define a function to be called
  const myFunction = () => {
    // Add your function logic here
    alert('Function called from Test page!');
  };

  return (
    <div>
      <h1>Test</h1>
      <button onClick={myFunction}>Call Function</button>
    </div>
  );
}

export default Test;
