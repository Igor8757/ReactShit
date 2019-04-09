import React, { Component } from 'react';
import './App.css';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      shit: 55
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <p>
           SHIIIII FOO
          </p>
        </header>
        <div className="App-body">
        <button class="button">
           shiiit is {this.state.shit}
          </button>
        </div>
      </div>
    );
  }
}

export default App;
