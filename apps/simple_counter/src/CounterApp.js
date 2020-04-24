import React, {useState} from 'react';
import './CounterApp.css';

// A simple counter app using Hooks.
function CounterApp() {
  // define a `count` value witha  default value and a function to handle that count. It is important to note
  // that since the function itself is not defined, it can be used in many different ways.
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked the button {count} times</p>
      {/* This button will decrease the count by one */}
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      {/* This button will increase the count by one */}
      <button onClick={() => setCount(count + 1)}>increment</button>
    </div>
  );
}

export default CounterApp;
