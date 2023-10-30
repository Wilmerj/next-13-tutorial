import React from "react";

type Props = {
  todo: {
    id?: string
    createdAt?: Date | string
    content: string
    completed?: boolean
  };
};

export default function TodoList({ todo }: Props) {
  return <div>{todo.content}</div>;
}
