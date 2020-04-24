import React, { useState } from "react";
import ItemList from "./item_list";

//
function ItemEntry() {
  // Define todo list array and function to update it
  const [todoList, updateTodoList] = useState([]);

  // Define the variable to hold user input from the textfield and the function to update that value
  const [todoEntry, setTodoEntry] = useState("");

  // Add the item to the list on button click. Ensure no empty items can be added.
  // Clear the textfield on submit.
  const onAddTodoClick = () => {
    if (todoEntry.length > 0) {
      updateTodoList((oldList) => [...oldList, todoEntry]);
      document.getElementById("todo-field").value = "";
    }
  };

  // Add item to list on enter key press
  const onEnterKeyEvent = (e) => {
    if (e.keyCode == 13) {
      onAddTodoClick();
    }
  };

  return (
    <div>
      <input
        id="todo-field"
        type="text"
        placeholder="Todo"
        onChange={(event) => setTodoEntry(event.target.value)}
        onKeyDown={onEnterKeyEvent}
      ></input>
      <button onClick={onAddTodoClick}>Add</button>
      <ItemList items={todoList} />
    </div>
  );
}

export default ItemEntry;
