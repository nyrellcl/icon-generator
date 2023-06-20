import React from "react";

export function Input(props: React.ComponentPropsWithoutRef<"input">) {
  return <input type="text" className="border border-gray-800 dark:text-gray-800 rounded px-4 py-2" {...props} />;
}
