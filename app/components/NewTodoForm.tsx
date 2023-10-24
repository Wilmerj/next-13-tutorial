"use client"
import React, { useState } from 'react'

const NewTodoForm = () => {
  const [ hello, setHello ] = useState('hola 1');
  console.log(hello)
  // console.log(window.localStorage)
  return (
    <div>Aca el formulario
      <button onClick={() => setHello('hola 2')}>Click me</button>
    </div>
  )
}

export default NewTodoForm;
