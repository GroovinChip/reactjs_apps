import React from "react";

// This component represent a list of items, rendered as an ordered list.
function ItemList(props) {
  const items = props.items;
  const listItems = items.map((item, index) => (
    <li key={index.toString()}>{item}</li>
  ));

  return <ol>{listItems}</ol>;
}

export default ItemList;
