import React from "react";

import noProjectimg from "../assets/no-projects.png";

export default function AddProject({ handleAdd, isAddingProject }) {
  return (
    <>
      {isAddingProject && (
        <div className="flx flex-col items-center gap-6 w-3/5">
          <img src={noProjectimg} alt="no projects" className="w-8" />
          <h3 className="capitalize text-slate-800 text-lg">
            no project selected
          </h3>
          <span className="text-slate-500 text-sm">
            Select a project or get started with a new one
          </span>
          <button
            onClick={handleAdd}
            className="bg-slate-900 text-slate-600 p-2 rounded-md"
          >
            Create new project
          </button>
        </div>
      )}
    </>
  );
}
