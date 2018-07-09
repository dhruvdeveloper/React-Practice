import React, { Component } from 'react';
import './App.css';
import Name from './Name/Name';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h2>Name of Children in Family.</h2>
          <Name name = "Sweety" education = "MSC in IT" color = "color-red"/>
          <Name name = "Yash" education = "M.S in Computer Science." color = "color-blue"/>
          <Name name = "Riddhi" education = "MBA in IT" color = "color-pink"/>
          <Name name = "vishal" education = "B.E in Computer Engineering." color = "color-orange"/>
          <Name name = "Dhruv" education = "B.E in Computer Engineering." color = "color-black"/>
          <Name name = "Chinmay" education = "Future MBA" color = "color-gold"/>


      </div>
    );
  }
}

export default App;
