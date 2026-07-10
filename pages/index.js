import React from 'react';
import Link from 'next/link';

import Main from '../src/layouts/Main';
import ContactIconLarge from '../src/components/Contact/ContactIconLarge';

const styles = {
  fontFamily: ['Julius Sans One', 'sans-serif'],
  fontSize: '30px',
  textAlign: 'center',
};

const Index = () => (
  <Main
    description="Mohammed Ahnaf's personal website."
  >
    <article className="post" id="index">
      <div>
        <div className="title">
          <h2 style={styles} data-testid="heading"><Link href="/">Welcome</Link></h2>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img alt="me-logo" src="/images/melogo.png" height={2 * 200} width={2 * 200} />
          </div>
        </div>
      </div>

      <div style={{
        display: 'grid',
        justifyItems: 'center',
        alignItems: 'center',
      }}
      >
        <ContactIconLarge />
      </div>
      {/* <p style={style}>
        Welcome سلام to my personal website. Please feel free to read more
        <Link href="/about" style={{ textDecoration: 'none', fontWeight: 'bold' }}>about me</Link>,
        or you can check out my {' '}
        <Link href="/resume" style={{ fontWeight: 'bold' }}>resume</Link>, {' '}
        <Link href="/projects" style={{ fontWeight: 'bold' }}>projects</Link>, {' '}
        view <Link href="/stats" style={{ fontWeight: 'bold' }}>site statistics</Link>, {' '}
        or <Link href="/contact" style={{ fontWeight: 'bold' }}>contact</Link> me.
      </p> */}
      {/* <p style={style}>
        Source available
        <a style={{ fontWeight: 'bold' }} href="https://github.com/imSaharukh/portfolio-site">
          here
        </a>.
      </p> */}
    </article>
  </Main>
);

export default Index;
