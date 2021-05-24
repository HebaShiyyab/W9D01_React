import React from 'react';
import ListItem from './components/ListItem'
import List from './components/list';


// jsx
const App = () => {
  const List = () => {
    const todo= [{todo: "wake up", id: 1}, {todo: "breakfast", id: 2}, {todo: "study", id: 3}]
    const newTodo = todo.map((Element,i)=>{
      return <ListItem  key = {i} todoList = {Element.todo} id = {Element.id}/>
    })
    return <div><h1>Todo List </h1>
    <h1>ListItem </h1></div>;
  };
  return <>
  <h1>Todo List </h1>
  <h1> todo </h1>
  <list todo = {newTodo}/>

 </>;
};

export default App;