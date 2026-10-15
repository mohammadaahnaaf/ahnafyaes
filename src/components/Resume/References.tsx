import React from 'react';
import Link from 'next/link';

import type { Reference } from '../../types';

interface ReferencesProps {
  data?: Reference[];
}

const References = ({ data = [] }: ReferencesProps) => (
  <div className="references">
    <div className="link-to" id="references" />
    <div className="title">
      <h3>References</h3>
    </div>
    <ul className="reference-list">
      {data.map((ref) => (
        <li key={ref.name} className="reference">
          <span className="chip chip-lilac">
            {ref.link ? <a href={ref.link}>{ref.name}</a> : ref.name}
          </span>
          <span className="reference-title">{ref.title}</span>
        </li>
      ))}
    </ul>
    <p className="reference-note">
      More references are available upon
      {' '}
      <Link href="/contact">request</Link>
      .
    </p>
  </div>
);

export default References;
