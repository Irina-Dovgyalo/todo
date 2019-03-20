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
        this.createTodoItem('Drink coffee'),
        this.createTodoItem('Make React App'),
        this.createTodoItem('Watch movie')
      ],
      term: ''
    };

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: shortId.generate()
    }
  }

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
      const newTodo = this.createTodoItem(text);
      this.setState(({todoData}) => {
      const newArray = [
        ...todoData,
        newTodo
      ];
      return {
        todoData: newArray
      }
    })
  }

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);
      const oldTodo = arr[idx];      
      const newTodo = {...oldTodo, [propName]: !oldTodo[propName]};
      return [
        ...arr.slice(0, idx),
        newTodo,
        ...arr.slice(idx + 1)
      ];
  }

  onToggleDone = (id) => {
    this.setState (({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      };
    })
  }

  onToggleImportant = (id) => {
    this.setState (({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      };
    })
  }

  search(items, term) {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.label.indexOf(term) > -1;
    })
  }
  
  render(){
    const { todoData, term } = this.state;
    const visibleItems = this.search(todoData, term);
    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className='todo-app'>
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className='search-filter-panel'>          
          <SearchPanel />          
          <ItemStatusFilter />
        </div>
        <TodoList todos={todoData} 
          onDeleted={this.deleteItem} 
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant}
        />
        <AddForm onAdded={this.addItem}/>
      </div>
    );
  }
}

