import React from 'react';
import TodoList from './components/TodoList';
import AppHeader from './components/AppHeader';
import SearchPanel from './components/SearchPanel';


const App = () => {
  const todoData = [
    {label: 'Drink coffee', important: false},
    {label: 'Make React App', important: true},
    {label: 'Watch movie', important: false}
  ];

  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList todos={todoData}/>
    </div>
  );
}

export default App;
