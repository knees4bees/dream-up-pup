import './Panel.css';

const Panel = ({ image }) => {
  return (
    <div className="create__panel">
      <img className="create__panel--image" src={image} alt="" />
      <input className="create__panel--input" />
    </div>
  )
}

export default Panel;