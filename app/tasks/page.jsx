import React from "react";
import TaskList from "../components/Navbar/TaskList";
import TaskForm from "../components/Navbar/TaskForm";
import DeleteForm from "../components/Navbar/DeleteForm";

const TaskPage = () => {
  return (
    <div className="max-w-lg">
      <h1 className="text-4xl mb-4">Task Page</h1>
      <TaskForm />
      <TaskList />
      {/* <DeleteForm /> */}
    </div>
  );
};

export default TaskPage;
