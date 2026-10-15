import React from 'react';

import Highlight from '../../Highlight';
import type { Position } from '../../../types';

interface JobProps {
  data: Position;
}

const Job = ({ data }: JobProps) => (
  <article className="jobs-container">
    <header>
      <h4>
        <span className="chip chip-mint">
          {data.link ? <a href={data.link}>{data.company}</a> : data.company}
        </span>
        <span className="job-position">{data.position}</span>
      </h4>
      <p className="daterange">
        <span className="chip chip-yellow">{data.daterange}</span>
      </p>
    </header>
    <ul className="points">
      {data.points.map((point) => (
        <li key={point}><Highlight text={point} /></li>
      ))}
    </ul>
  </article>
);

export default Job;
