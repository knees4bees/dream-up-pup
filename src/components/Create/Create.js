import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Create.css';
import { getBreedImages, getSubbreedImages } from '../../apiCalls';
import Panel from '../Panel/Panel';

class Create extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount = () => {
    const breedWords = this.props.breed.split(' ');
    let breed = '';
    let subbreed = '';

    console.log('component Create mounted');

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
        .then(images => this.props.updateCurrentImages(images.message));
    } else {
      breed = breedWords[0].toLowerCase();
      getBreedImages(breed)
        .then(response => {
          if (!response.ok) {
            throw new Error();
          }
          return response.json();
        })
        .then(images => this.props.updateCurrentImages(images.message));
    }
    console.log('breed: ', breed, 'subbreed:', subbreed)
  }

  createPanels = () => {
    // TODO rethink and maybe refactor this images and panels stuff
    let images = [];
    if (this.props.images) {
      images = [...this.props.images];
    }
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

    console.log("panels: ", panels);
    return panels;
  }

  render() {
    return (
      <main className="create">
        <div className="create__title">
          <h2 className="create__title--words">Title: </h2>
          <input className="create__title--input">
            {/* TODO refine input element */}
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