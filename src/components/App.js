import React, { Component } from 'react';
import '../App.css';
import Footer from './Footer';
import MainComponent from './MainComponent';
import Header from './Header';

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
        <Header />
        <MainComponent />
        <Footer />
      </div>
    );
  }
}

export default App;
