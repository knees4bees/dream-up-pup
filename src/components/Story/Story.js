import PropTypes from 'prop-types';
import './Story.css';

const Story = ({ title, images, sentences }) => {
  return (
    <main className="story">
      <div className="story__title">
        <h2 className="story__title--words">{title}</h2>
      </div>
      <div className="story__panel--container">
        {/* {this.createPanels()} */}
        <div className="story__panel">
          <img className="story__panel--image" src={images[0]} alt="" />
          <p className="story__panel--text">{sentences[0]}</p>
        </div>
        <div className="story__panel">
          <p className="story__panel--text">{sentences[1]}</p>
          <img className="story__panel--image" src={images[1]} alt="" />
        </div>
        <div className="story__panel">
          <img className="story__panel--image" src={images[2]} alt="" />
          <p className="story__panel--text">{sentences[2]}</p>
        </div>
      </div>
      {/* <button className="story__button--save">Save story</button> */}
    </main>
  )

}

export default Story;

Story.propTypes = {
  title: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  sentences: PropTypes.arrayOf(PropTypes.string)
};