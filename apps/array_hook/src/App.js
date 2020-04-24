import React, { useState } from "react";
import ItemList from "./itemlist";

function ArrayHookApp() {
  // Define the array and the function to update the array
  const [list, setList] = useState([]);
  // Define the variable to hold the input from the textfield and the function to update that value
  const [currentValue, setValue] = useState();

  // Update the array on button click
  const onAddListClick = () => {
    setList(oldList => [...oldList, currentValue]);
  }
  
  return (
    <div>
      <h3>Enter something into the list</h3>
      <input type="text" onChange={(event => setValue(event.target.value))}></input>
      <button
        type="button"
        onClick={onAddListClick}
      >
        Add
      </button>
      <ItemList items={list} />
    </div>
  );
}

export default ArrayHookApp;
