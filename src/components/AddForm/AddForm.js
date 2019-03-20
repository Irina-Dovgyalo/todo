import React, { Component } from 'react';
import './AddForm.css';

export default class AddForm extends Component {

    state = {
        value: ''
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onAdded(this.state.value);
        this.setState({
            value: ''
        })
    }

    render() {
        return(
            <form className='add-form d-flex' onSubmit={this.handleSubmit}>
                <input type='text' 
                    className='form-control' 
                    value={this.state.value}
                    onChange={this.handleChange} 
                    placeholder='What needs to be done'
                />
                <button className='btn btn-outline-secondary'>Add</button>
            </form>
        )
    }
}
