"use client";
import { editTask } from "@/utils/actions";
import React, { useEffect } from "react";
import { useFormStatus } from "react-dom";
import toast from "react-hot-toast";

const EditForm = ({ task }) => {
  const { pending } = useFormStatus();
  const { id, content, completed } = task;
  useEffect(() => {
    if (pending) {
      toast.loading("Editing...");
    } else {
      toast.success("Edited!");
    }
  }, [pending]);
  return (
    <form
      action={editTask}
      className="max-w-sm p-12 border border-base-300 rounded-lg"
    >
      <input type="hidden" name="id" value={id} />
      {/* content */}
      <input
        type="text"
        required
        defaultValue={content}
        name="content"
        className="input input-bordered w-full"
      />
      {/* completed */}
      <div className="form-control my-4">
        <label htmlFor="completed" className="label cursor-pointer">
          <span className="label-text">completed</span>
          <input
            type="checkbox"
            defaultChecked={completed}
            id="completed"
            name="completed"
            className="checkbox checkbox-primary checkbox-sm"
          />
        </label>
      </div>
      <button
        type="submit"
        className="btn btn-primary btn-block btn-sm"
        disabled={pending}
      >
        {pending ? "Editing..." : "Edit"}
      </button>
    </form>
  );
};

export default EditForm;
