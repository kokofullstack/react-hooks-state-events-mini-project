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

// // import React from 'react';

// // function Task({ text, category, onDelete }) {
// //   return (
// //     <div className="task">
// //       <div className="label">{category}</div>
// //       <div className="text">{text}</div>
// //       <button className="delete" onClick={onDelete}>
// //         X
// //       </button>
// //     </div>
// //   );
// // }

// import React from 'react';

// function Task() {
//   return (
//     <div className="task">
//       <div className="label">CATEGORY HERE</div>
//       <div className="text">TEXT HERE</div>
//       <button className="delete">X</button>
//     </div>
//   );
// }

// export default Task;
