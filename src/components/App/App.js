import { Component } from 'react';
import './App.css';
import Landing from '../Landing/Landing';
import Header from '../Header/Header';
import { getBreeds } from '../../apiCalls';
import { cleanBreeds } from '../../utilities';
import { mockBreeds } from '../../mockData';

class App extends Component {
  constructor() {
    super();
    this.state = {
      allBreeds: [],
    };
  }

  componentDidMount() {
    getBreeds()
      .then(response => {
        if (!response.ok) {
          throw new Error();
        }
        return response.json();
      })
      .then(data => cleanBreeds(mockBreeds))
      // TODO replace mockBreeds with actual fetched data
      // .then(data => cleanBreeds(data))
      .then(cleanedData => this.setState({ allBreeds: cleanedData }))
  }

  render() {
    return (
      <>
        <Header />
        <Landing breeds={this.state.allBreeds} />
      </>
    )
  }
}


export default App;
