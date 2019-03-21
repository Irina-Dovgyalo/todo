import React, { Component } from 'react';
import './TodoListItem.css';

export default class TodoListItem extends Component {
    
    render() {

        const { taskName, onDeleted, onToggleImportant, onToggleDone, done, important } = this.props;
        
        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done';
        }

        if (important) {
            classNames += ' important';
        }

        return(
            <span className={classNames}>
                <span className='todo-list-item-label' onClick={onToggleDone}>{taskName}</span>
                <div className='buttons' >
                    <button type='button' className='btn btn-outline-secondary btn-sm' onClick={this.onChangeEdit}><i className="fas fa-pencil-alt"></i></button>
                    <button type='button' className='btn btn-outline-success btn-sm' onClick={onToggleImportant} ><i className="fas fa-exclamation"></i></button>
                    <button type='button' className='btn btn-outline-danger btn-sm' onClick={onDeleted}><i className="far fa-trash-alt"></i></button>
                </div>            
            </span>
        )
    }
}