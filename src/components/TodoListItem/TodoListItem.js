import React, { Component } from 'react';
import './TodoListItem.css';

export default class TodoListItem extends Component {

    render() {
        const { label, onDeleted, onToggleImportant, onToggleDone, done, important } = this.props;
        
        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done';
        }

        if (important) {
            classNames += ' important';
        }

        return(
            <span className={classNames}>
                <div>
                    <input className='checkbox' onClick={onToggleDone} type="checkbox" />
                    <span className='todo-list-item-label'>{label}</span>
                </div>                 
                <div className='buttons'>
                    <button type='button' className='btn btn-outline-success btn-sm' onClick={onToggleImportant} ><i className="fas fa-exclamation"></i></button>
                    <button type='button' className='btn btn-outline-danger btn-sm' onClick={onDeleted}><i className="far fa-trash-alt"></i></button>
                </div>            
            </span>
        )
    }
}