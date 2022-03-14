import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import raw from 'raw.macro';

import Main from '../layouts/Main';

// uses babel to load contents of file
const markdown = raw('../data/about.md');

const count = markdown.split(/\s+/)
  .map((s) => s.replace(/\W/g, ''))
  .filter((s) => s.length).length;

// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;

const style = {
  fontFamily: ['Julius Sans One', 'sans-serif']
}

const About = () => (
  <Main
    title="About"
    description="Learn about Mohammed Ahnaf"
  >
    <article style={style} className="post markdown" id="about">
      <header>
        <div className="title">
          <h2 style={style} data-testid="heading"><Link to="/about">About Me</Link></h2>
          <p style={style}>(in about {count} words)</p>
          <p style={style}>This Site is a clone from <a href='https://saharukh.com/'>SA Saharukh</a>'s portfolio</p>
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

export default About;
