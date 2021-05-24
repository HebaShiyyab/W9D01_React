import React from 'react';
import ListItem from './components/ListItem'
import List from './components/list';


// jsx
const App = () => {
  const List = () => {
    const todo= [{todo: "wake up", id: 1}, {todo: "breakfast", id: 2}, {todo: "study", id: 3}]
    return <div><h1>Todo List </h1>
    <h1>ListItem </h1></div>;
  };
  return <>
  <h1>Todo List </h1>
  <h1> List </h1>
  <List todos = {todo}/>

 </>;
};

export default App;