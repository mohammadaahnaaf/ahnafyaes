import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const style = {
  fontFamily: ['Julius Sans One', 'sans-serif'],
  textAlign:'center',
  fontWeight: 'normal'
}
const styles = {
  fontFamily: ['Julius Sans One', 'sans-serif'],
  fontSize: '30px',
  textAlign: 'center'
}
const styleq = {
  letterSpacing: '0px',
  fontFamily: ["Times New Roman", 'Times', 'serif'],
  fontSize: '30px',
  textAlign: 'center',
  display: 'none'
}

const Index = () => (
  <Main
    description={"Mohammed Ahnaf's personal website."}
  >
    <article className="post" id="index">
      <div>
        <div className="title">
          <h2 style={styles} data-testid="heading"><Link to="/">Merhaba<span style={styleq}> | مـــرحـــبـــاََ </span></Link></h2>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
            <img alt='me-logo' src='/images/melogo.png' height={2 * 200} width={2 * 200} />
          </div>
        </div>
      </div>
      {/* <p style={style}> Welcome سلام to my personal website. Please feel free to read more <Link to="/about" style={{ decoration: 'none', fontWeight: 'bold' }}>about me</Link>,
        or you can check out my {' '}
        <Link style={{ fontWeight: 'bold' }} to="/resume">resume</Link>, {' '}
        <Link style={{ fontWeight: 'bold' }} to="/projects">projects</Link>, {' '}
        view <Link style={{ fontWeight: 'bold' }} to="/stats">site statistics</Link>, {' '}
        or <Link style={{ fontWeight: 'bold' }} to="/contact">contact</Link> me.
      </p> */}
      {/* <p style={style}> Source available <a style={{  fontWeight: 'bold' }} href="https://github.com/imSaharukh/portfolio-site">here</a>.</p> */}
    </article>
  </Main>
);

export default Index;
