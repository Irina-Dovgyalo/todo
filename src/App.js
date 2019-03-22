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
      term: '', //search panel
      value: '', //input value
      filter: 'all', //all, active, done,
      editItem: false  
    };

  handleChange = (e) => {
    this.setState({
        value: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.addItem(this.state.value);
    this.setState({
        value: ''
    })
}

  deleteItem = (id) => {
    const newArray = this.state.todoData.filter(todo => todo.id !== id);
    this.setState({
      todoData: newArray
    })
  }

  handleEdit = (id) => {
    this.setState(({todoData}) => {
    const newArray = todoData.filter(todo => todo.id !== id);

    const selectedItem = todoData.find(todo => todo.id === id);

    return {
      todoData: newArray,
      value: selectedItem.taskName,
      editItem: true,
      id: id
    }
  });
}

  addItem = (taskName) => {    
      const newTodo = {
      taskName,
      important: false,
      done: false,
      id: shortId.generate()
    };
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
    const index = arr.findIndex((el) => el.id === id);
      const oldTodo = arr[index];      
      const newTodo = {...oldTodo, [propName]: !oldTodo[propName]};
      return [
        ...arr.slice(0, index),
        newTodo,
        ...arr.slice(index + 1)
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

  search(todoData, term) {
    if (term.length === 0) {
      return todoData;
    }
    return todoData.filter((item) => {
      return item.taskName.toLowerCase().indexOf(term.toLowerCase()) > -1;
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
    const { todoData, term, filter, editItem, value } = this.state;

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
          deleteItem={this.deleteItem} 
          handleEdit={this.handleEdit}
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant}
         />
        <AddForm          
          value={value} 
          editItem={editItem} 
          handleEdit={this.handleEdit}
          handleChange={this.handleChange} 
          handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

