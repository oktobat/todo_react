import React from 'react';
import TodoTemplate from './TodoTemplate';
import TodoInsert from './TodoInsert'
import TodoList from './TodoList'

const App = () => {

  const todos = [
    { id:1, text:"일정관리1", checked:true },
    { id:2, text:"일정관리2", checked:false },
    { id:3, text:"일정관리3", checked:false }
  ]

  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList todos={todos} />
    </TodoTemplate>
  );
};

export default App;