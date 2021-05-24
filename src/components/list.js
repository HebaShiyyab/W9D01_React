import React from 'react';
import ListItem from './ListItem'



const list ({todos})=>{
  const propListItem = todos.map((Element,i)=>{
    return <ListItem  key = {i} todoList = {Element.todos} id = {Element.id}/>
  })
  return (<> <ul>
    {propListItem}
  </ul>
     </>)
}
  
  export default List;