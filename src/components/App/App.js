import { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Landing from '../Landing/Landing';
import Header from '../Header/Header';
import Create from '../Create/Create';
import { getBreeds } from '../../apiCalls';
import { cleanBreeds } from '../../utilities';
import { mockBreeds } from '../../mockData';

class App extends Component {
  constructor() {
    super();
    this.state = {
      allBreeds: [],
      selectedBreed: '',
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
    const { allBreeds, selectedBreed } = this.state;

    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" render={() => <Landing breeds={allBreeds} />} />
          {/* TODO replace hard-coded breed with actual selected breed */}
          <Route path="/create" render={() => <Create breed='Afghan Hound' />} />
          {/* <Route path="/create" render={() => <Create breed={selectedBreed} />} /> */}
        </Switch>
      </>
    );
  }
}


export default App;
