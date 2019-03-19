import React from 'react';
import TodoList from './components/TodoList/TodoList';
import AppHeader from './components/AppHeader/AppHeader';
import SearchPanel from './components/SearchPanel/SearchPanel';
import ItemStatusFilter from './components/ItemStatusFilter/ItemStatusFilter';
import './App.css';


const App = () => {
  const todoData = [
    {label: 'Drink coffee', important: false, id: 1},
    {label: 'Make React App', important: true, id: 2},
    {label: 'Watch movie', important: false, id: 3}
  ];

  return (
    <div className='todo-app'>
      <AppHeader />
      <div className='search-filter-panel'>
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList todos={todoData}/>
    </div>
  );
}

export default App;
