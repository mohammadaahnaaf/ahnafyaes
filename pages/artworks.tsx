import React, { CSSProperties } from 'react';
import Link from 'next/link';

import Main from '../src/layouts/Main';

// import Cell from '../src/components/Projects/Cell';
import data from '../src/data/artworks';
import type { Artwork } from '../src/types';

const Projects = () => (
  <Main
    title="Artworks"
    description="Look around Mohammed Ahnaf's Artworks."
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link href="/artworks">Artworks</Link></h2>
          <p>A breaf selection of my Artworks </p>
        </div>
      </header>
      <Arts artworks={data} />
    </article>
  </Main>
);

export default Projects;

function Arts({ artworks }: { artworks: Artwork[] }) {
  const style: CSSProperties = {
    borderStyle: 'solid',
    borderWidth: '2px',
    borderColor: '#BB7643',
    padding: '1rem',
    gridColumn: 'span 1',
  };
  const main: CSSProperties = {
    display: 'grid',
    gap: '1rem',
    gridTemplateColumns: 'repeat(2, 1fr)',
  };

  return (
    <div style={main}>
      {artworks.map((x) => (
        <div style={style} key={x.image}>
          <img src={x.image} height="100%" width="100%" alt="Artwork by Mohammed Ahnaf" />
        </div>
      ))}
    </div>
  );
}
