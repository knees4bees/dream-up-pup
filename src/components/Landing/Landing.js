import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Landing.css';

const Landing = ({ breeds, selectedBreed, selectBreed }) => {

  const listItems = breeds.map(breed => {
    return (
      <option key={breed} value={breed}>
        {breed}
      </option>
    )
  })


  return (
    <main className="landing">
      <div className="landing__sentence">
        <h2 className="landing__sentence--words">I want to write a story about
          <select className="landing__sentence--menu"
            value={selectedBreed}
            onChange={event => selectBreed(event.target.value)}
          >
            {listItems}
          </select>
          dogs
        </h2>
      </div>
      <Link to="/create" className="landing__button--container">
        <button className="landing__button--button">Write story</button>
      </Link>
        <img className="dog-above-book" src="/dog-above-book.svg" alt="Dog head peeking out above open book" />
        {/* <img className="dog-above-book-higher" src="/dog-above-book-higher.svg" alt="Dog head peeking out higher above open book" /> */}
    </main>
  )
}

export default Landing;

Landing.propTypes = {
  breeds: PropTypes.arrayOf(PropTypes.string),
  selectedBreed: PropTypes.string.isRequired,
  selectBreed: PropTypes.func.isRequired,
};