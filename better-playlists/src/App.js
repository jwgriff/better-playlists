import React, { Component } from 'react';
import './App.css';

let defaultStyle = {
  color: '#A0A0A0'
};

class Aggregate extends Component {
  render() {
    return (
      <div stlyle={{...defaultStyle, width: "40%", display: 'inline-block'}}>
        <h2>Number Text</h2>
      </div>
    );
  }
}

class Filter extends Component{
  render(){
    return (
      <div style={{defaultStyle}}>
        <img/>
        <input type="text"/>
      </div>
    )
  }
}

class Playlist extends Component{
  render(){
    return(
      <div style={{...defaultStyle, width: "25%", display: 'inline-block'}}>
        <img />
        <h3>Playlist Name</h3>
        <ul><li>Song 1</li><li>Song 2</li><li>Song 3</li></ul>
      </div>
    );
  }
}

class App extends Component {
  render() {
    let name = 'Jeff'
    let headerStyle = {color: '#00FFFF', 'font-size': '40px'}
    return (
      <div className="App">
        <h1 style={{ ...defaultStyle, 'font-size': '54px'}}>Title</h1>
        <Aggregate/>
        <Aggregate/>
        <Filter/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
      </div>
    );
  }
}

export default App;
