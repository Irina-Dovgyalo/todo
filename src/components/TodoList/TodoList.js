import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';
import './TodoList.css';

const TodoList = ({ todos, deleteItem, onToggleImportant, onToggleDone, handleEdit}) => {

    const elements = todos.map((item) => {

        const { id, ...itemProps } = item;

        return (
            <li key={id} className='list-group-item'>
              <TodoListItem {...itemProps} 
                deleteItem={() => deleteItem(id)} 
                onToggleImportant={() => onToggleImportant(id)}
                onToggleDone={() => onToggleDone(id)}
                handleEdit={() => handleEdit(id)}
              />
            </li>
        )
    })

    return(
      <ul className='list-group todo-list' >
        { elements }
      </ul>
    )
  }

export default TodoList;