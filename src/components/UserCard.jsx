import React from "react";
import "./UserCard.css";

export default function UserCard({ name, email, UserId, ob }) {
  return (
    <div className="user-cards">
      <div className="user-card">
        <span className="user-id">{UserId}</span>
        <div className="user">
          <img src="icon.svg" alt="Иконка"></img>
          <div>
            <div className="user-name">{name}</div>
            <div className="user-email">{email}</div>
          </div>
        </div>
      </div>
      <div className="todo-value">{Object.values(ob)[UserId - 1]}</div>
    </div>
  );
}
