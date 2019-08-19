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
    render(){
        return (
            <div>
                <p>To do List</p>
                <form onSubmit={this.onSubmit}>
                    <input class="input" value={this.state.term} onChange={this.onChange} />
                    <br></br>
                    <button class="button">Submit</button>
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