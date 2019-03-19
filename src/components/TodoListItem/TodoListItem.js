import React, { Component } from 'react';
import './TodoListItem.css';

export default class TodoListItem extends Component {
    constructor(){
        super();
        this.state ={
            done: false,
            important: false
        };
    }

    onLabelClick = () => {
        this.setState((state) => {
            return {
                done: !state.done
            }
        })
    }

    onMarkImportant = () => {
        this.setState((state) => {
            return {
                important: !state.important
            }
        })
    }

    render() {
        const { label } = this.props;
        const { done, important } = this.state;

        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done';
        }

        if (important) {
            classNames += ' important';
        }

        return(
            <span className={classNames}>
                <span className='todo-list-item-label' onClick={this.onLabelClick}>{label}</span> 
                <div className='buttons'>
                    <button type='button' className='btn btn-outline-success btn-sm' onClick={this.onMarkImportant}><i className="fas fa-exclamation"></i></button>
                    <button type='button' className='btn btn-outline-danger btn-sm'><i className="far fa-trash-alt"></i></button>
                </div>            
            </span>
        )
    }
}