import prisma from "@/utils/db";
import Link from "next/link";
import React from "react";
import DeleteForm from "./DeleteForm";
import { getTasks } from "@/utils/actions";

const TaskList = async () => {
  const tasks = await getTasks();
  if (tasks.length === 0) {
    return <h2 className="mt-8 font-medium text-lg">No tasks to show...</h2>;
  }

  return (
    <div className="max-w-lg">
      <ul className="">
        {tasks.map((task) => {
          return (
            <li
              key={task.id}
              className="mb-4 flex justify-between bg-base-100 p-4 rounded-xl"
            >
              <p
                className={`text-xl ${task.completed ? "line-through" : null}`}
              >
                {" "}
                {task.content}
              </p>
              <div className="flex gap-4 items-center">
                <Link href={`/tasks/${task.id}`}>
                  <button className="text-base btn btn-accent btn-xs">
                    Edit
                  </button>
                </Link>
                <DeleteForm id={task.id} />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TaskList;
