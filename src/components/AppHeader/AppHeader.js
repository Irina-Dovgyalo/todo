import React from 'react';
import './AppHeader.css';


const AppHeader = ({toDo, done}) => {
    return (
      <div className='app-header d-flex'>
        <h1>My Todo List</h1>
      </div>
    ) 
  }

export default AppHeader;