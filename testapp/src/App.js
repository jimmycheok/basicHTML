import React, { Component } from 'react'

import CustomButton from './components/Button'
import CustomSidemenu from './components/Sidemenu'

import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
  state={
    count:0
  }

  componentWillMount = () =>{
    this.setState({count: this.state.count + 1})
  }
  componentDidMount = () =>{
    this.setState({count: this.state.count + 1}, () => {
      //callback/Promise/Async Await
      alert('count is updated succesfully')
    })
  }
  componentDidUpdate = (prevProps, prevState) =>{
    console.log(prevState)
  }
  
  render = () => {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h4>{this.state.count}</h4>
          <CustomButton type="success" onClick={()=>{
            this.setState({count:this.state.count + 1})
          }}>
            Click Me!
          </CustomButton>
          <CustomSidemenu>
            
          </CustomSidemenu>
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
}

export default App;
