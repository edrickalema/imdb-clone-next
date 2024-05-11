"use client";
import { createTasks } from "@/utils/actions";
import prisma from "@/utils/db";
import { revalidatePath } from "next/cache";
import { useEffect } from "react";
import { useFormStatus, useFormState } from "react-dom";
import toast from "react-hot-toast";

const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button className="btn btn-primary join-item " disabled={pending}>
      {pending ? "Please wait..." : "Create Task"}
    </button>
  );
};
const initialState = {
  message: null,
};

const TaskForm = () => {
  const [state, formAction] = useFormState(createTasks, initialState);

  useEffect(() => {
    if (state.message === "success") {
      toast.success("Task created successfully");

      return;
    }

    if (state.message) {
      toast.error("Something went wrong");
      return;
    }
  }, [state]);
  return (
    <form action={formAction}>
      {/* {state.message ? (
        <p
          className={`my-3 text-4xl font-bold ${
            state.message === "success" ? "text-green-600" : "text-red-600"
          }`}
        >
          {state.message}
        </p>
      ) : (
        ""
      )}{" "} */}
      <div className="join w-full">
        <input
          type="text"
          name="content"
          className="join-item input-bordered input w-full"
          placeholder="Type here..."
          required
        />
        <SubmitBtn />
      </div>
    </form>
  );
};

export default TaskForm;
