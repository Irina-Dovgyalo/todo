import React, { Component } from 'react';
import './TodoListItem.css';

export default class TodoListItem extends Component {
    render() {
        const { label, important = false } = this.props;
        const style = {
            color: important ? 'tomato' : 'black'
        };
        return(
            <span className='todo-list-item'>
                <span className='todo-list-item-label' style={style}>{label}</span> 
                <div className='buttons'>
                    <button type='button' className='btn btn-outline-success btn-sm'><i className="fas fa-exclamation"></i></button>
                    <button type='button' className='btn btn-outline-danger btn-sm'><i className="far fa-trash-alt"></i></button>
                </div>            
            </span>
        )
    }
}