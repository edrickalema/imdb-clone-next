import EditForm from "@/app/components/Navbar/EditForm";
import prisma from "@/utils/db";
import React from "react";

const getTaskInfo = async (id) => {
  const taskInfo = await prisma.task.findUnique({
    where: {
      id,
    },
  });

  console.log(taskInfo);
  return taskInfo;
};
const SingleTaskPage = async ({ params }) => {
  const taskInfo = await getTaskInfo(params.id);
  return <EditForm task={taskInfo} />;
};

export default SingleTaskPage;
