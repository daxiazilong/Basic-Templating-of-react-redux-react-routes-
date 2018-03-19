import React, { Component } from 'react';
import Header from './header/header';
import Main from './main/main';
import logo from './logo.svg';
import { connect } from 'react-redux';

import './App.css';

class App extends Component {
  constructor(props,state){
    super();
    console.log(props);
  }
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          我想显示首页输入的东东：
            {this.props.text}
        </p>
        <Header message="hi"></Header>
        <Main />
      </div>
    );
  }
}
const state2props = (state) => {
    return {text:state.text}
};
App = connect(state2props)(App)

export default App;
