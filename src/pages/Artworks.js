import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

// import Cell from '../components/Projects/Cell';
import data from '../data/artworks';

const Projects = () => (
  <Main
    title="Artworks"
    description="Look around Mohammed Ahnaf's Artworks."
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/projects">Artworks</Link></h2>
          <p>A breaf selection of my Artworks </p>
        </div>
      </header>
      <Arts data={data} />
    </article>
  </Main>
);

export default Projects;

function Arts() {

  const style = {
    borderStyle: 'solid',
    borderWidth: '2px',
    borderColor: '#BB7643',
    gridColumn: 1 / 2,
    padding: '1rem',
    gridColumn: 'span 1'
  }
  const main = {
    display: 'grid',
    gap: '1rem',
    gridTemplateColumns: 'repeat(2, 1fr)'
  }

  return (
    <div style={main}>
      {data.map((x, index) => (
        <div style={style} key={index}>
          <img src={x.image} height='100%' width='100%' alt='artworks-photo' />
        </div>
      ))}
    </div>
  )
}
