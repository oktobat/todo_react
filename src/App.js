import React, {useState, useRef} from 'react';
import TodoTemplate from './TodoTemplate';
import TodoInsert from './TodoInsert'
import TodoList from './TodoList'

const App = () => {
  const id = useRef(1);
  const [todos, setTodos] =useState([
    // { id:1, text:"일정관리1", checked:true },
  ])

  const onInsert = (value)=>{
      const todo = { id:id.current, text:value, checked:false}
      id.current = id.current + 1;
      console.log(id.current)
      setTodos(todos.concat(todo))
      console.log(todos)
  }

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} />
    </TodoTemplate>
  );
};

export default App;