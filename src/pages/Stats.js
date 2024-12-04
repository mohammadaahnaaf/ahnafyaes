import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Personal from '../components/Stats/Personal';
import Site from '../components/Stats/Site';
// import GitHubCalendar from 'react-github-calendar';


const Stats = () => (
  <Main
    title="Stats"
    description="Some statistics about Mohammed Ahnaf"
  >
    <article className="post" id="stats">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/stats">Stats</Link></h2>
        </div>
      </header>
      <Personal />
      {/* <div style={{ paddingBottom: "32px" }}>
        <h3><span style={{ textTransform: 'lowercase', letterSpacing: '2px', fontSize: "20px", color: 'green' }}>
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
