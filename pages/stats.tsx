import React from 'react';
import Link from 'next/link';

import Main from '../src/layouts/Main';

import Personal from '../src/components/Stats/Personal';
import Site from '../src/components/Stats/Site';
// import GitHubCalendar from 'react-github-calendar';

const Stats = () => (
  <Main
    title="Stats"
    description="Some statistics about Mohammed Ahnaf"
  >
    <article className="post" id="stats">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link href="/stats">Stats</Link></h2>
        </div>
      </header>
      <Personal />
      {/* <div style={{ paddingBottom: "32px" }}>
        <h3><span style={{
          textTransform: 'lowercase', letterSpacing: '2px', fontSize: "20px", color: 'green',
        }}>
          <a href="https://github.com/mohammadaahnaaf"> @me</a>
        </span> on GitHub</h3>
        {/* <GitHubCalendar username="mohammadaahnaaf" /> */
        /* <GitHubCalendar colorScheme='light' username="mohammadaahnaaf" />
      </div> */}
      <Site />
    </article>
  </Main>
);

export default Stats;
