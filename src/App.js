import React, { Component } from 'react';
import TodoList from './components/TodoList/TodoList';
import AppHeader from './components/AppHeader/AppHeader';
import SearchPanel from './components/SearchPanel/SearchPanel';
import ItemStatusFilter from './components/ItemStatusFilter/ItemStatusFilter';
import AddForm from './components/AddForm/AddForm';
import shortId from 'shortid';
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

  addItem = (text) => {    
      const newTodo = {
        label: text,
        important: false,
        id: shortId.generate()
      };
      this.setState(({todoData}) => {
      const newArr = [
        ...todoData,
        newTodo
      ];
      return {
        todoData: newArr
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
        <AddForm onAdded={this.addItem}/>
      </div>
    );
  }
}

