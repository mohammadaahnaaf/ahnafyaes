import React from 'react';
import dayjs from 'dayjs';

import Highlight from '../Highlight';
import type { Project } from '../../types';

interface CellProps {
  data: Project;
}

const Cell = ({ data }: CellProps) => {
  const preview = data.image
    ? <img src={`/${data.image}`} alt={data.title} />
    : (
      <div className="no-preview" aria-hidden="true">
        <span className="no-preview-title">{data.title}</span>
        <span className="no-preview-label">preview coming soon</span>
      </div>
    );

  return (
    <div className="cell-container">
      <article className="mini-post">
        <header>
          <h3>{data.link ? <a href={data.link}>{data.title}</a> : data.title}</h3>
          <p className="cell-subtitle">{data.subtitle}</p>
          {data.date && <time className="published">{dayjs(data.date).format('MMMM, YYYY')}</time>}
        </header>
        {data.link ? <a href={data.link} className="image">{preview}</a> : <div className="image">{preview}</div>}
        <div className="description">
          <p><Highlight text={data.desc} /></p>
        </div>
      </article>
    </div>
  );
};

export default Cell;
