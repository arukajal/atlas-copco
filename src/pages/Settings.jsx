import React from 'react';

function Settings() {
  // Define a function to be called
  const myFunction = () => {
    // Add your function logic here
    alert('Function called from Settings page!');
  };

  return (
    <div>
      <h1>Settings</h1>
      <button onClick={myFunction}>Call Function</button>
    </div>
  );
}

export default Settings;
