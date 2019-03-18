import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = () => {
    return(
      <ul>
        <li><TodoListItem label="Build React App" /></li>
        <li><TodoListItem label="Drink Coffee" /></li>
      </ul>
    )
  }

export default TodoList;