import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Create.css';
import { getBreedImages, getSubbreedImages } from '../../apiCalls';

class Create extends Component {
  constructor(props) {
    super(props);
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
          <div className="create__panel">
            <img className="create__panel--image" src="" alt="" />
            <input className="create__panel--input" />
          </div>
          <div className="create__panel">
            <img className="create__panel--image" src="" alt="" />
            <input className="create__panel--input" />
          </div>
          <div className="create__panel">
            <img className="create__panel--image" src="" alt="" />
            <input className="create__panel--input" />
          </div>
        </div>
        <Link to="/story" className="create__button--container">
          <button className="create__button--button">Create story</button>
        </Link>
      </main>
    )
  }
}

export default Create;