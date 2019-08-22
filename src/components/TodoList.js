import React, { Component } from 'react';

class TodoList extends Component{
    constructor(props){
        super(props)
        this.state = {
            term: '',
            items: []
        };
    }
    onChange = (event) => {
        this.setState({term: event.target.value});
    }
    onSubmit = (event) => {
        event.preventDefault()
        if(this.state.term === '')
            return
        this.setState({
            term: '',
            items: [...this.state.items, this.state.term]
        });
    }
    onClear = (event) => {
        event.preventDefault()
        this.setState({
            term: '',
            items: []
        });
    }

    render(){
        return (
            <div>
                <p>To do List</p>
                <form onSubmit={this.onSubmit}>
                    <input className="input" value={this.state.term} onChange={this.onChange} />
                    <br></br>
                    <button className="button">Submit</button>
                    <button className="button" onClick={this.onClear}>Clear</button>
                </form>
                <ul>
                {
                    this.state.items.map((item, index) => <li key={index}>{item}</li>)
                }
                </ul>
            </div>
        );
    }
}

export default TodoList;