import React from 'react';

function ManageRules() {
  // Define a function to be called
  const myFunction = () => {
    // Add your function logic here
    alert('Function called from ManageRules page!');
  };

  return (
    <div>
      <h1>ManageRules</h1>
      <button onClick={myFunction}>Call Function</button>
    </div>
  );
}

export default ManageRules;
