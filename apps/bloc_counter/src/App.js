import React from "react";
import BlocBuilder from "bloc-builder-react";
import CounterBloc from "./counter_bloc";

function CounterApp() {
  // Instantiate the bloc
  const bloc = new CounterBloc();

  return (
    <div>
      <h3>Counter</h3>
      <BlocBuilder
        subject={bloc.getCounterSubject()}
        builder={(snapshot) => {
          switch (!snapshot.error) {
            case true:
              return (
                <p>You have pressed the button {snapshot.data} times.</p>
              );
            default:
              return <div>Error: {snapshot.error}</div>;
          }
        }}
      />
      <div>
        <button onClick={bloc.decrement}>Decrement</button>
        <button onClick={bloc.increment}>Increment</button>
      </div>
    </div>
  );
}

export default CounterApp;
