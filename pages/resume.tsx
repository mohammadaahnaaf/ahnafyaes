import React from 'react';
import Link from 'next/link';

import Main from '../src/layouts/Main';

import Education from '../src/components/Resume/Education';
import Experience from '../src/components/Resume/Experience';
import Skills from '../src/components/Resume/Skills';
import References from '../src/components/Resume/References';

import degrees from '../src/data/resume/degrees';
import positions from '../src/data/resume/positions';
import skillGroups from '../src/data/resume/skills';
import references from '../src/data/resume/references';

const sections = [
  'Experience',
  'Skills',
  'Education',
  'References',
];

const stack = ['React', 'NextJS', 'TypeScript', 'NodeJS'];

const Resume = () => (
  <Main
    title="Resume"
    description="Mohammed Ahnaf's resume. Software engineer (React, NextJS, TypeScript, NodeJS) at ILM.ai, ACS Future School, Munchies, iGot.ai and AI Trade Inc."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link href="/resume">Resume</Link></h2>
          <p className="resume-summary">
            <span className="chip chip-peach">Software Engineer</span>
            {stack.map((s) => <span key={s} className="chip chip-sky">{s}</span>)}
            <span className="chip chip-mint">Dhaka, Bangladesh</span>
          </p>
          <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>
            ))}
          </div>
        </div>
      </header>
      <Experience data={positions} />
      <Skills groups={skillGroups} />
      <Education data={degrees} />
      <References data={references} />
    </article>
  </Main>
);

export default Resume;
