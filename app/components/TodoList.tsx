import React from "react";
import Todo from "./Todo";

type Props = {
  todos: Array<{
    id?: string
    createdAt?: Date | string
    content: string
    completed?: boolean
  }>
};

export default function TodoList({ todos }: Props) {
  return (
    <div>
      {todos.map((todo) => {
        return <Todo todo={todo} key={todo.id} />;
      })}
    </div>
  );
}
