import { deleteTask } from "@/utils/actions";
import React from "react";

const DeleteForm = ({ id }) => {
  return (
    <form action={deleteTask}>
      {" "}
      <div>
        <input type="hidden" name="id" value={id} />
        <button className="btn btn-error btn-xs">Delete</button>
      </div>
    </form>
  );
};

export default DeleteForm;
