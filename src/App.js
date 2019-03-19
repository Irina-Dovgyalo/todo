import React, { Component } from 'react';
import TodoList from './components/TodoList/TodoList';
import AppHeader from './components/AppHeader/AppHeader';
import SearchPanel from './components/SearchPanel/SearchPanel';
import ItemStatusFilter from './components/ItemStatusFilter/ItemStatusFilter';
import './App.css';


export default class App extends Component {
    state = {
      todoData: [
        {label: 'Drink coffee', important: false, id: 1},
        {label: 'Make React App', important: true, id: 2},
        {label: 'Watch movie', important: false, id: 3}
      ]
    };

  deleteItem = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const newArray = [
        ...todoData.slice(0, idx),
        ...todoData.slice(idx + 1)
      ];
      return {
        todoData: newArray
      }
    })
  }
  
  render(){
    return (
      <div className='todo-app'>
        <AppHeader />
        <div className='search-filter-panel'>
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList todos={this.state.todoData} onDeleted={this.deleteItem} />
      </div>
    );
  }
}

