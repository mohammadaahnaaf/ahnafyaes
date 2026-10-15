import React from 'react';
import type { GetStaticProps } from 'next';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import fs from 'fs';
import path from 'path';

import Main from '../src/layouts/Main';

// Make all hrefs next.js links
const LinkRenderer = ({ ...children }: React.ComponentProps<typeof Link>) => <Link {...children} />;

interface AboutProps {
  markdown: string;
  count: number;
}

const About = ({ markdown, count }: AboutProps) => (
  <Main
    title="About"
    description="Learn about Mohammed Ahnaf"
  >
    <article className="post markdown" id="about">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link href="/about">About Me</Link></h2>
          <p>
            (in about
            {' '}
            <mark className="hl hl-yellow">
              {count}
              {' '}
              words
            </mark>
            )
          </p>
          <p>
            This Site is a clone from
            {' '}
            <a href="https://saharukh.com/">SA Saharukh</a>
            &apos;s portfolio
          </p>
        </div>
      </header>
      <ReactMarkdown
        source={markdown}
        renderers={{
          Link: LinkRenderer,
        }}
        escapeHtml={false}
      />
    </article>
  </Main>
);

export const getStaticProps: GetStaticProps<AboutProps> = () => {
  const markdown = fs.readFileSync(path.join(process.cwd(), 'src/data/about.md'), 'utf8');
  const count = markdown.split(/\s+/)
    .map((s) => s.replace(/\W/g, ''))
    .filter((s) => s.length).length;

  return { props: { markdown, count } };
};

export default About;
