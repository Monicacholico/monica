import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Spreadsheet from './components/Spreadsheet';
import RSuite from "./components/RSuite";


// class App extends Component {
  


  // render() {
    const App  = () => {
    const buttonText = { text: "Click Me!"};
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <Hello/>
      //     <h1>Hello</h1>
      //     <Spreadsheet/>
      //     <RSuite/>
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
      <div>
        <label className="label" for="name">Enter name: </label>
        <input id="name" />
        <button style={{backgroundColor: 'blue', color: 'white'}}>
        {buttonText.text}
        </button>
      </div>
    );
  }
  // }
// }

export default App;

ReactDOM.render(
  <App/>,
  document.querySelector("#root")
);
