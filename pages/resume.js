import React from 'react';
import Link from 'next/link';

import Main from '../src/layouts/Main';

import Education from '../src/components/Resume/Education';
import Experience from '../src/components/Resume/Experience';
import Skills from '../src/components/Resume/Skills';
import Courses from '../src/components/Resume/Courses';
import References from '../src/components/Resume/References';

import courses from '../src/data/resume/courses';
import degrees from '../src/data/resume/degrees';
import positions from '../src/data/resume/positions';
import { skills, categories } from '../src/data/resume/skills';

const sections = [
  'Education',
  'Experience',
  'Skills',
  'Courses',
  'References',
];

const Resume = () => (
  <Main
    title="Resume"
    description="Mohammed Ahnaf's Resume. Arthena, Matroid, YC, Skeptical Investments, Stanford ICME, Planet Labs, and Facebook."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link href="/resume">Resume</Link></h2>
          <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>
            ))}
          </div>

        </div>
      </header>
      <Education data={degrees} />
      <Experience data={positions} />
      <Skills skills={skills} categories={categories} />
      <Courses data={courses} />
      <References />

    </article>
  </Main>
);

export default Resume;
