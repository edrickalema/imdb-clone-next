import React from "react";
import prisma from "@/utils/db";

const prismaHandler = async () => {
  await prisma.task.create({
    data: {
      content: "Learn Next Js",
    },
  });

  const tasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return tasks;
};
const PrismaExamplePage = async () => {
  const tasks = await prismaHandler();
  return (
    <div>
      <h1 className="text-4xl mb-4">Prisma Example </h1>
      {tasks.map((task) => {
        return (
          <p key={task.id} className="text-xl">
            {task.content}
          </p>
        );
      })}
    </div>
  );
};

export default PrismaExamplePage;
