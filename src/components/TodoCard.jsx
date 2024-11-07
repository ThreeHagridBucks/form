import React from "react";

export default function TodoCard({ Id }) {
  return (
    <span className="todo-card">
      <span>{Id}</span>
    </span>
  );
}
