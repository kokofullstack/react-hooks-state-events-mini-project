import React from 'react';
import Task from './Task';

function TaskList({ tasks, onTaskDelete }) {
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task
          key={task.id}
          text={task.text}
          category={task.category}
          id={task.id} // Pass the id to the Task component
          deleteButton={onTaskDelete} // Use the same prop name
        />
      ))}
    </div>
  );
}

export default TaskList;

// import React from 'react';
// import Task from './Task';

// function TaskList({ tasks, deleteButton }) {
//   return (
//     <div className="tasks">
//       {tasks.map((task) => (
//         <Task
//           key={task.id}
//           text={task.text}
//           category={task.category}
//           deleteButton={deleteButton}
//         />
//       ))}
//     </div>
//   );
// }

// export default TaskList;

// // TaskList.js

// function TaskList({ tasks, onDelete }) {
//   return (
//     <div className="tasks">
//       {tasks.map((task) => (
//         <Task
//           key={task.id}
//           text={task.text}
//           category={task.category}
//           onDelete={() => onDelete(task.id)}
//         />
//       ))}
//     </div>
//   );
// }

// export default TaskList;

// import React from 'react';
// import Task from './Task';

// function TaskList({ tasks }) {
//   return (
//     <div className="tasks">
//       {tasks.map((task) => (
//         <Task key={task.id} text={task.text} category={task.category} />
//       ))}
//     </div>
//   );
// }

// export default TaskList;

// import React from 'react';
// import Task from './Task';

// function TaskList({ tasks }) {
//   return (
//     <div className="tasks">
//       {tasks.map((task) => (
//         <Task key={task.id} text={task.text} category={task.category} />
//       ))}
//     </div>
//   );
// }

// export default TaskList;

// import React from 'react';
// import Task from './Task';

// function TaskList({ tasks }) {
//   return (
//     <div className="tasks">
//       {tasks.map((task) => (
//         <Task key={task.id} text={task.text} category={task.category} />
//       ))}
//     </div>
//   );
// }

// export default TaskList;

// import React from "react";

// function TaskList() {
//   return (
//     <div className="tasks">
//       {/* display a list of tasks using Task component */}
//     </div>
//   );
// }

// export default TaskList;
