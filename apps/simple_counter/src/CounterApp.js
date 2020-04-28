import React, { useState } from 'react';

// A simple counter app using Hooks.
function CounterApp() {
  // define a `count` value witha  default value and a function to handle that count. It is important to note
  // that since the function itself is not defined, it can be used in many different ways.
  const [count, setCount] = useState(0);

  return (
    <div>
      <p class='m-2'>You clicked the button {count} times</p>
      {/* This button will decrease the count by one */}
      <button
        class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-1'
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>
      {/* This button will increase the count by one */}
      <button
        class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
}

export default CounterApp;
