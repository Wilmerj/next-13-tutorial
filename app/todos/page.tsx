import React from 'react'
import TodoList from '@/app/components/TodoList';
import db from '@/utils/db';

const getdata = async () => {
  const todos = await db.todo.findMany({});
  return todos;
}


const TodosPage = async () => {
  const todos = await getdata();
  console.info(todos);

  return (
    <div>
      <TodoList todos={todos} />
    </div>
  )
}

export default TodosPage