import './Landing.css';

const Landing = ({ breeds }) => {
  const listItems = breeds.map(breed => {
    return <option key={breed}>{breed}</option>
  })

  return (
    <main className="landing">
      <h2 className="landing__sentence">I want to write a story about </h2>
      <select className="landing__menu">
        {listItems}
      </select>
      <h2 className="landing__sentence"> dogs</h2>
    </main>
  )
}

export default Landing;