import React from 'react';

import Job from './Experience/Job';
import type { Position } from '../../types';

interface ExperienceProps {
  data?: Position[];
}

const Experience = ({ data = [] }: ExperienceProps) => (
  <div className="experience">
    <div className="link-to" id="experience" />
    <div className="title">
      <h3>Experience</h3>
    </div>
    {data.map((job) => (
      <Job
        data={job}
        key={job.company}
      />
    ))}
  </div>
);

export default Experience;
