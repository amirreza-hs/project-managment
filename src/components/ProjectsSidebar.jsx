import React from "react";
import Button from "./Button";

export default function ProjectsSidebar({ onStartAddProject }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="uppercase mb-8 md:text-2xl text-stone-200 font-bold">
        your projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="flex flex-col gap-4 text-white">
        <li>projects</li>
        <li>projects</li>
        <li>projects</li>
      </ul>
    </aside>
  );
}
