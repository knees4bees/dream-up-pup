import { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Landing from '../Landing/Landing';
import Header from '../Header/Header';
import Create from '../Create/Create';
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
  }

  resetHome = () => {
    this.setState({
      title: '',
      images: [],
      sentences: [],
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

  render() {
    const { allBreeds, selectedBreed, images, sentences } = this.state;

    return (
      <>
        <Header resetHome={this.resetHome}/>
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
                />
              )
            }}
          />
        </Switch>
      </>
    );
  }
}

export default App;
