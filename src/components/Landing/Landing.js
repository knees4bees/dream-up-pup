import { Link } from 'react-router-dom';
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
        <h2 className="landing__sentence--words">I want to write a story about </h2>
        <select className="landing__sentence--menu"
          value={selectedBreed}
          onChange={event => selectBreed(event.target.value)}
        >
          {listItems}
        </select>
        <h2 className="landing__sentence--words"> dogs</h2>
      </div>
      <Link to="/create" className="landing__button--container">
        <button className="landing__button--button">Write story</button>
      </Link>
    </main>
  )
}

export default Landing;