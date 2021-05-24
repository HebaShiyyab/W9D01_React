import React from 'react'


const ListItem = ({todo,id})=>{
const xId = ()=>{
    console.log(id);
}
    return (<>
    <li>
    todo 
    </li>
    <button onClick ={xId} > click </button>
     </>)

}
export default ListItem;