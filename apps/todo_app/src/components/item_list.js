import React from "react";

// This component represents the todo list
function ItemList(props) {
  const items = props.items;

  const listItems = items.map((item, index) => (
    <li key={index.toString()}>   
      <input type="checkbox"></input>
      {item}
    </li>
  ));

  return <ul style={{ listStyleType: "none" }}>{listItems}</ul>;
}

export default ItemList;
