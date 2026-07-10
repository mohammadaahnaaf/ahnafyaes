import React from 'react';
import Link from 'next/link';

import Main from '../src/layouts/Main';

import Cell from '../src/components/Projects/Cell';
import data from '../src/data/projects';

const Projects = () => (
  <Main
    title="Projects"
    description="Learn about S A Saharukh's projects."
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link href="/projects">Projects</Link></h2>
          <p>A selection of projects</p>
        </div>
      </header>
      {data.map((project) => (
        <Cell
          data={project}
          key={project.title}
        />
      ))}
    </article>
  </Main>
);

export default Projects;
