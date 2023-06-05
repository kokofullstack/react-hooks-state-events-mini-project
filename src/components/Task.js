import React from 'react';

function Task({ text, category, id, deleteButton }) {
  function handleClick() {
    if (deleteButton) {
      deleteButton(id); // Pass the id to the deleteButton function
    }
  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleClick}>
        X
      </button>
    </div>
  );
}

export default Task;
