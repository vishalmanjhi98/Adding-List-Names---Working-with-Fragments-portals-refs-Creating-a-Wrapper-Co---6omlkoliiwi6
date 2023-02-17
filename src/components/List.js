import React from 'react';
import ListItems from './ListItems';
//code here
 const List = ({listx}) =>{
  return(
    
    <>
      <ul id='list'>
        {listx.map((list  => <ListItems valuex ={list}/>))}
      </ul>
    </>
    
  
  )
}

export default List;