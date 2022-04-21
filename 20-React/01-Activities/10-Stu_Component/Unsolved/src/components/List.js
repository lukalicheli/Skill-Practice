import React from 'react';

function List(props) {
  return (
    <ul className="list-group">
      {/* TODO: Use the `map` method to iterate over each grocery and return a `li` element that contains the item's name and has a unique key attribute. Also, each li should be given the class "list-group-item" */}
      {props.groceries.map((item) => {
        // TODO: update the returned li for a grocery item
        return (
          <li></li>
        );
      })}
    </ul>
  );
}

export default List;
