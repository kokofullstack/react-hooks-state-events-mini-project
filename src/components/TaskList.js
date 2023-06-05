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
