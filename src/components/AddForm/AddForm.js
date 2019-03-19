import React, { Component } from 'react';
import './AddForm.css';

export default class AddForm extends Component {
    render() {
        return(
            <div className='add-form'>
                <button onClick={() => this.props.onAdded('add item')} className='btn btn-outline-secondary'>Add</button>
            </div>
        )
    }
}
