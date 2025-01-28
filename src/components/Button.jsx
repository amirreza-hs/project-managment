import React from "react";

export default function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className="py-4 px-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
    >
      {children}
    </button>
  );
}
