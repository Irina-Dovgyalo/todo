import React, { Component } from 'react';
import './AddForm.css';

export default class AddForm extends Component {

    render() {
        const { value, handleChange, handleSubmit } = this.props;
        return(
            <form className='add-form d-flex' onSubmit={handleSubmit}>
                <input type='text' 
                    className='form-control' 
                    value={value}
                    onChange={handleChange} 
                    placeholder='What needs to be done'
                />
                <button className='btn btn-outline-secondary'>
                    {/* { editItem ? 'Edit' : 'Add'}  */} Add
                </button>
            </form>
        )
    }
}
