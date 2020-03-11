import React, { Component } from 'react';
import './App.css';
import Memes from './pics/Memes';

class App extends Component {

  click = () => {               // to make the button change the pictures
    window.location.reload()
  }


  render() {
  return (
    <div className="App">
      <Memes />
      <button onClick={this.click}  >Generate</button>
    </div>
  );
  }
}

export default App;
