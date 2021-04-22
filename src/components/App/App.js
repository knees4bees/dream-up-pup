import { Component } from 'react';
import './App.css';
import Landing from '../Landing/Landing';
import Header from '../Header/Header';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <Header />
        <Landing />
      </>
    )
  }
}


export default App;
