import { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Create.css';
import { getBreedImages, getSubbreedImages } from '../../apiCalls';

class Create extends Component {

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
        .then(images => this.props.updateImages(images.message))
        .catch(err => this.props.updateError('Ruh roh! Something went wrong!'))
    } else {
      breed = breedWords[0].toLowerCase();
      getBreedImages(breed)
        .then(response => {
          if (!response.ok) {
            throw new Error();
          }
          return response.json();
        })
        .then(images => this.props.updateImages(images.message))
        .catch(err => this.props.updateError('Ruh roh! Something went wrong!'))
    }
  }

  createPanels = () => {
    const images = this.props.images;
    const sentences = this.props.sentences;
    let panels = [];

    if (images.length) {
      panels = images.map((image, index) => (
        <div className="create__panel" key={index}>
          <img className="create__panel--image" src={image} alt="" />
          <textarea
            className="create__panel--input" 
            type="text"
            name="caption"
            placeholder={`Sentence ${index + 1}`}
            rows="5"
            cols="40"
            maxLength="85"
            value={sentences[index]}
            onChange={event => this.props.updateSentences(event, index)}
          />
        </div>
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
        {!this.props.images.length &&
          <h2 className="error-message">Fetching...</h2>
        }
        <div className="create__title">
          <h2 className="create__title--words">
            Title: 
            <input
              className="create__title--input"
              type="text"
              name="title"
              placeholder="My doggie day"
              maxLength="30"
              value={this.props.title}
              onChange={event => this.props.updateTitle(event)}
            />
          </h2>
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

Create.propTypes = {
  breed: PropTypes.string.isRequired,
  updateTitle: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(PropTypes.string),
  updateImages: PropTypes.func.isRequired,
  sentences: PropTypes.arrayOf(PropTypes.string),
  updateSentences: PropTypes.func,
  updateError: PropTypes.func
};