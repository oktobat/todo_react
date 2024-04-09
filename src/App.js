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
      // setTodos(todos.concat(todo))
      setTodos([...todos, todo])
      localStorage.todos = JSON.stringify([...todos, todo])
      localStorage.id = JSON.stringify(id.current)
      console.log(todos)
  }

  const onToggle = (id) => {
      setTodos(todos.map(item => item.id == id ? {...item, checked:!item.checked} : item))
      localStorage.todos = JSON.stringify(todos.map(item => item.id == id ? {...item, checked:!item.checked} : item))
  }

  const onRemove = (id)=>{
      setTodos(todos.filter(item=>item.id!==id))
      localStorage.todos = JSON.stringify(todos.filter(item=>item.id!==id))
  }

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
    </TodoTemplate>
  );
};

export default App;