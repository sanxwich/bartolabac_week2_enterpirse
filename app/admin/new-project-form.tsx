"use client";

import { useActionState } from "react";
import { createProject } from "./actions";

export function NewProjectForm() {
  const [state, action, pending] = useActionState(createProject, {
    message: "",
    title: "",
    year: "",
    summary: "",
  });

  return (
    <form action={action} className="mt-6 flex w-[28rem] flex-col gap-4">
      <input
        name="title"
        defaultValue={state.title}
        placeholder="Title"
        required
        className="border px-4 py-2 rounded-md"
      />
      <input
        name="year"
        type="number"
        defaultValue={state.year}
        placeholder="Year"
        required
        className="border px-4 py-2 rounded-md"
      />
      <textarea
        name="summary"
        defaultValue={state.summary}
        placeholder="Description"
        required
        rows={3}
        className="border px-4 py-2 rounded-md"
      />
      <input
        name="image"
        type="file"
        accept="image/png,image/jpeg,image/webp"
        required
        className="border px-4 py-2 rounded-md"
      />
      {state.message && <p className="text-red-700">{state.message}</p>}
      <button
        disabled={pending}
        className="bg-neutral-900 px-4 py-2 text-white disabled:opacity-50 rounded-md"
      >
        {pending ? "Posting" : "Post project"}
      </button>
    </form>
  );
}
