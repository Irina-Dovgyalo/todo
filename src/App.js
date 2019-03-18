import React, { Component } from 'react';
import TodoList from './components/TodoList';
import AppHeader from './components/AppHeader';
import SearchPanel from './components/SearchPanel';


class App extends Component {
  render() {
    return (
      <div>
        <AppHeader />
        <SearchPanel />
        <TodoList />
      </div>
    );
  }
}

export default App;
