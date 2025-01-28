import React from "react";

export default function ProjectList({ handleAdd }) {
  return (
    <div className="bg-slate-800 rounded-md w-2/5 py-8 px-4 h-dvh flex flex-col gap-5 items-start">
      <h2 className="uppercase text-2xl text-white font-bold">your projects</h2>
      <button
        onClick={handleAdd}
        className="bg-slate-600 text-slate-500 p-2 rounded-md"
      >
        + Add Project
      </button>
      <ul className="flex flex-col gap-4 text-white">
        <li>projects</li>
        <li>projects</li>
        <li>projects</li>
      </ul>
    </div>
  );
}
