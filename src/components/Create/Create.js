import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Create.css';
import { getBreedImages, getSubbreedImages } from '../../apiCalls';
import Panel from '../Panel/Panel';

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      images: [],
    }
  }

  componentDidMount = () => {
    const breedWords = this.props.breed.split(' ');
    let breed = '';
    let subbreed = '';

    if (breedWords.length === 2) {
      breed = breedWords[1].toLowerCase();
      subbreed = breedWords[0].toLowerCase();
      getSubbreedImages(breed, subbreed)
        .then(response => {
          if (!response.ok) {
            throw new Error();
          }
          return response.json();
        })
        .then(images => this.setState({ images: images.message }));
    } else {
      breed = breedWords[0].toLowerCase();
      getBreedImages(breed)
        .then(response => {
          if (!response.ok) {
            throw new Error();
          }
          return response.json();
        })
        .then(images => this.setState({ images: images.message }));
    }
  }

  handleChange = event => {
    this.setState({ title: event.target.value });
  }

  createPanels = () => {
    const { images } = this.state;
    let panels = [];

    if (images.length) {
      panels = images.map((image) => (
        <Panel
          image={image}
          // TODO figure this part out
          // text={text}
        />
      ));
    } else {
      for (let i = 0; i < 3; i++) {
        panels.push(<div className="create__panel--container" key={i}><div className="create__panel--placeholder" /></div>);
      }
    }

    return panels;
  }

  render() {
    return (
      <main className="create">
        <div className="create__title">
          <h2 className="create__title--words">Title: </h2>
          <input
            className="create__title--input"
            type="text"
            name="title"
            value={this.state.title}
            onChange={event => this.handleChange(event)}
          >
          </input>
        </div>
        <div className="create__panel--container">
          {this.createPanels()}
        </div>
        <Link to="/story" className="create__button--container">
          <button className="create__button--button">Create story</button>
        </Link>
      </main>
    )
  }
}

export default Create;