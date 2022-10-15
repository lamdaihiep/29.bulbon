import logo from './logo.svg';
import './App.css';

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

import React, { Component } from 'react';
 
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
            message: "Mouse Event"
        }
  }
 
  handleEvent = (event) => {
   if (event.type === "mousedown") {
          this.setState({ message: "Mouse Down"});
      } else {
          this.setState({ message: "Mouse Up"});
      }
  }
 
  render() {
    return (
      <div>
      <div className="h4 bg-secondary text-white text-center p-2">
          { this.state.message }
      </div>
        <div className="text-center">
          <button className="btn btn-secondary" onMouseDown={ this.handleEvent } onMouseUp={ this.handleEvent } >
           Change Image
          </button>
        </div>
      </div>
    );
  }
}
 
export default App;