import React, { Component } from 'react';
import TodoList from './components/TodoList/TodoList';
import AppHeader from './components/AppHeader/AppHeader';
import SearchPanel from './components/SearchPanel/SearchPanel';
import ItemStatusFilter from './components/ItemStatusFilter/ItemStatusFilter';
import AddForm from './components/AddForm/AddForm';
import shortId from 'shortid';
import LoadingBar from './components/LoadingBar/LoadingBar';
import './App.css';


export default class App extends Component {
    state = {
      todoData: [],
      term: '',
      filter: 'all' //all, active, done,
    };

  createTodoItem(value) {
    return {
      value,
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

  onSearchChange = (term) => {
    this.setState({ term });
  }

  search(items, term) {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.value.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  }

  onFilterChange = (filter) => {
    this.setState({ filter });
  }

  filter(items, filter) {

    switch(filter){
      case 'all':
        return items;
      case 'active':
        return items.filter((item) => !item.done);
      case 'done':
        return items.filter((item) => item.done);
      default:
        return items;
    }
  }
  
  render(){
    const { todoData, term, filter } = this.state;

    const visibleTodoItems = this.filter(this.search(todoData, term), filter);
    const doneCount = todoData.filter((el) => el.done).length;
   
    return (
      <div className='todo-app'>
        <LoadingBar all={todoData.length} done={doneCount} />
        <AppHeader />
        <div className='search-filter-panel'>          
          <SearchPanel onSearchChange={this.onSearchChange} />          
          <ItemStatusFilter filter={filter} onFilterChange={this.onFilterChange} />
        </div>
        <TodoList todos={visibleTodoItems} 
          onDeleted={this.deleteItem} 
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant}
         />
        <AddForm onAdded={this.addItem}/>
      </div>
    );
  }
}

