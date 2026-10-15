import React from 'react';

import type { Degree as DegreeData } from '../../../types';

interface DegreeProps {
  data: DegreeData;
}

const Degree = ({ data }: DegreeProps) => (
  <article className="degree-container">
    <header>
      <h4 className="degree">{data.degree}</h4>
      <p className="school">
        <a href={data.link}>{data.school}</a>
        {' '}
        <span className="chip chip-yellow">{data.year}</span>
      </p>
    </header>
  </article>
);

export default Degree;
