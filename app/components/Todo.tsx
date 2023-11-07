"use client";
import React, { useTransition } from "react";
import { completeTodo } from "@/utils/actions";

type Props = {
  todo: {
    id: string;
    createdAt?: Date | string;
    content: string;
    completed?: boolean;
  };
};

export default function TodoList({ todo }: Props) {
  const [isPending, startTransition] = useTransition();

  return (
    <div
      className={`border border-black/20 cursor-pointer ${todo.completed ? 'line-through text-gray-900' : ''}`}
      onClick={() =>
        startTransition(() => {
          completeTodo(todo.id);
        })
      }
    >
      {todo.content}
    </div>
  );
}
