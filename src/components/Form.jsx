import React from "react";
import useFetchData from "./hooks/useFetchData";
import Loader from "./Loader";
import UserCard from "./UserCard";
import "./Form.css";

export default function Form() {
  const {
    data: todo,
    loading: load,
    error: err,
  } = useFetchData("https://jsonplaceholder.typicode.com/todos");

  const {
    data: users,
    loading,
    error,
  } = useFetchData("https://jsonplaceholder.typicode.com/users");

  if ((loading && !users.length) || (load && !todo.length)) {
    return <Loader />;
  }

  if (error || err) {
    return <div>Error: {error.message}</div>;
  }

  let obj = todo.reduce(function (acc, el) {
    let us = el.userId;
    acc[us] = (acc[us] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="form">
      <div className="titles-form">
        <div className="titles-left-form">
          <span className="title-left-form-ht">#</span>
          <span className="title-left-form-user">Username</span>
        </div>
        <span className="title-right-form-todo">to-do count</span>
      </div>
      <div>
        {users.map((user) => (
          <UserCard
            key={user.name}
            name={user.name}
            email={user.email}
            UserId={user.id}
            ob={obj}
          />
        ))}
      </div>
    </div>
  );
}
