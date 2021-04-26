import { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Landing from '../Landing/Landing';
import Header from '../Header/Header';
import Create from '../Create/Create';
import Story from '../Story/Story';
import { getBreeds } from '../../apiCalls';
import { cleanBreeds } from '../../utilities';

class App extends Component {
  constructor() {
    super();
    this.state = {
      allBreeds: [],
      selectedBreed: 'Affenpinscher',
      title: '',
      images: [],
      sentences: [],
      error: ''
    };
  }

  componentDidMount = () => {
    getBreeds()
      .then(response => {
        if (!response.ok) {
          throw new Error();
        }
        return response.json();
      })
      .then(data => cleanBreeds(data))
      .then(cleanedData => this.setState({ allBreeds: cleanedData }))
      .catch(err => this.setState({ error: 'Ruh roh! Something went wrong!'}))
  }

  resetHome = () => {
    this.setState({
      title: '',
      images: [],
      sentences: [],
      error: ''
    });
  }

  selectBreed = (breed) => {
    this.setState({ selectedBreed: breed });
  }

  updateTitle = event => {
    this.setState({ title: event.target.value });
  }

  updateImages = (images) => {
    this.setState({ images: images });
  }

  updateSentences = (event, index) => {
    const newSentences = this.state.sentences;
    newSentences[index] = event.target.value;
    this.setState({ sentences: newSentences });
  }

  updateError = (message) => {
    this.setState({ error: message });
  }

  render() {
    const { allBreeds, selectedBreed, title, images, sentences, error } = this.state;

    return (
      <>
        <Header resetHome={this.resetHome}/>
        {error && 
          <h2 className="error-message">{error}</h2>
        }
        {!error && !allBreeds.length &&
          <h2 className="error-message">Fetching...</h2>
        }
        {!error && allBreeds.length &&
          <Switch>
            <Route
              exact path="/"
              render={() => {
                return (
                  <Landing
                    breeds={allBreeds}
                    selectedBreed={selectedBreed}
                    selectBreed={this.selectBreed}
                  />
                )
              }}
            />
            <Route
              path="/create"
              render={() => {
                return (
                  <Create
                    breed={selectedBreed}
                    updateTitle={this.updateTitle}
                    images={images}
                    updateImages={this.updateImages}
                    sentences={sentences}
                    updateSentences={this.updateSentences}
                    updateError={this.updateError}
                  />
                )
              }}
            />
            <Route
              path="/story"
              render={() => {
                return (
                  <Story
                    title={title}
                    images={images}
                    sentences={sentences}
                  />
                )
              }}
            />
            <Route
              render={() => {
                return (
                  <h2 className="error-message">Ruh roh! That page doesn't exist.</h2>
                )
              }}
            />
          </Switch>
        }
      </>
    );
  }
}

export default App;
