import React from 'react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import fs from 'fs';
import path from 'path';

import Main from '../src/layouts/Main';

// Make all hrefs next.js links
const LinkRenderer = ({ ...children }) => <Link {...children} />;

const style = {
  fontFamily: ['Julius Sans One', 'sans-serif'],
};

const About = ({ markdown, count }) => (
  <Main
    title="About"
    description="Learn about Mohammed Ahnaf"
  >
    <article style={style} className="post markdown" id="about">
      <header>
        <div className="title">
          <h2 style={style} data-testid="heading"><Link href="/about">About Me</Link></h2>
          <p style={style}>
            (in about
            {' '}
            {count}
            {' '}
            words)
          </p>
          <p style={style}>
            This Site is a clone from
            {' '}
            <a href="https://saharukh.com/">SA Saharukh</a>
            &apos;s portfolio
          </p>
        </div>
      </header>
      <ReactMarkdown
        style={style}
        source={markdown}
        renderers={{
          Link: LinkRenderer,
        }}
        escapeHtml={false}
      />
    </article>
  </Main>
);

export function getStaticProps() {
  const markdown = fs.readFileSync(path.join(process.cwd(), 'src/data/about.md'), 'utf8');
  const count = markdown.split(/\s+/)
    .map((s) => s.replace(/\W/g, ''))
    .filter((s) => s.length).length;

  return { props: { markdown, count } };
}

export default About;
