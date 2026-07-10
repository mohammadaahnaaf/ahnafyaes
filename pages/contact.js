import React from 'react';
import Link from 'next/link';

import Main from '../src/layouts/Main';
import EmailLink from '../src/components/Contact/EmailLink';
import ContactIcons from '../src/components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Mohammed Ahnaf via email @ michael.l.dangelo@gmail.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link href="/contact">Contact</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <p>Feel free to get in touch. You can email me at: </p>
        {' '}
        <EmailLink />
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
