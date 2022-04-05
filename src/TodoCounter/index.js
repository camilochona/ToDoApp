import React from 'react';
import './TodoCounter.css';
import {TodoContext} from '../TodoContext';

function TodoCounter() {
  const {totalTodos, completedTodos} = React.useContext(TodoContext);
  return (
    <h1 className="TodoCounter">
      <span>H</span>
      <span>A</span>
      <span>S</span> 
      <span className='counter_1'></span>
      <span>D</span>
      <span>O</span>
      <span>N</span>
      <span>E</span>
      <span className='counter_2'>{completedTodos}</span>
      <span>O</span>
      <span>F</span>
      <span className='counter_3'>{totalTodos}</span>
      <span>T</span>
      <span>A</span>
      <span>S</span>
      <span>K</span>
      <span>!</span>
    </h1>
  );
}

export { TodoCounter };

{/* <h2 className="TodoCounter">Has completado 
    {completedTodos} de {totalTodos} TODOs
    </h2> */}