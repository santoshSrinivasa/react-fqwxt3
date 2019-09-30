import React, { Component } from 'react';
import { render } from 'react-dom';
import Welcome from "./Welcome";
import Login from "./login";
import './style.css';

class App extends Component {
  constructor() {
    super();
    
  }

  render() {
    return (
      <div>
        <Welcome name="santosh" age="25"/>
        <Login name="santosh" age="25"/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
