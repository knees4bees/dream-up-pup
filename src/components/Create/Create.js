import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Create.css';

class Create extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //fetch images
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