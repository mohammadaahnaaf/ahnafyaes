import React from 'react';
import Link from 'next/link';

import Main from '../src/layouts/Main';
import ContactIconLarge from '../src/components/Contact/ContactIconLarge';
import Terminal from '../src/components/Home/Terminal';

const Index = () => (
  <Main
    description="Mohammed Ahnaf's personal website."
  >
    <article className="post" id="index">
      <div>
        <div className="title">
          <h2 className="welcome" data-testid="heading"><Link href="/">Welcome</Link></h2>
          <div className="welcome-logo">
            <img alt="me-logo" src="/images/melogo.png" height={2 * 200} width={2 * 200} />
          </div>
        </div>
      </div>

      <Terminal />

      <div className="welcome-icons">
        <ContactIconLarge />
      </div>
    </article>
  </Main>
);

export default Index;
