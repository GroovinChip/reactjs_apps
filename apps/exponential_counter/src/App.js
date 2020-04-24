import React, {useState} from 'react';

// A simple exponential counter app using Hooks.
function ExponentialCounter() {
  // Do not set a default value as we will read the user's input from the textfield and set it to `count`.
  const [base, setBase] = useState(0);
  const [exponent, setExponent] = useState(0);

  return (
    <div>
      <h3>Type a number and an exponent to see the result in real time</h3>
      <p>Note: this does not account for negative integers</p>
      <p><input type="number" placeholder="Type a number" onChange={event => setBase(event.target.value)}></input></p>
      <p><input type="number" placeholder="Type an exponent" onChange={event => setExponent(event.target.value)}></input></p>
      {/* Ensure we do not show anything besides a valid result*/}
      <p>{base === 0 || exponent === 0 ? '' : Math.pow(base, exponent)}</p>
    </div>
  );
}

export default ExponentialCounter;
