import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import ContactIcons from '../Contact/ContactIcons';
import type { Tone } from '../../types';

const names = ['АХЬНАФЯ', 'আহনাফিয়া', 'AHNAFYA', 'احنفــــــــــيه'];

const fonts = [
  'Noto Sans, sans-serif',
  'Noto Sans Bengali, sans-serif',
  'Noto Sans, sans-serif',
  'Noto Kufi Arabic, sans-serif',
];

const roles: { label: string; tone: Tone }[] = [
  { label: 'Software Engineer', tone: 'peach' },
  { label: 'Visual Product Designer', tone: 'lilac' },
  { label: 'UI/UX Designer', tone: 'mint' },
  { label: 'Futuristic Visionary Artist', tone: 'yellow' },
];

const stack = ['React', 'NextJS', 'TypeScript', 'NodeJS'];

function SideBar() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    if (currentIndex >= names.length - 1) {
      setTimeout(() => { setCurrentIndex(0); }, 3000);
    } else {
      setTimeout(() => { setCurrentIndex(currentIndex + 1); }, 3000);
    }
  }, [currentIndex]);

  return (
    <section id="sidebar">
      <section id="intro">
        <Link target="_blank" href="/images/me-2.png" className="logo">
          <img src="/images/me-2.png" alt="Mohammed Ahnaf" />
        </Link>
        <header>
          {names.map((name, index) => (
            <div
              key={name}
              className="name-cycle"
              style={{
                display: index === currentIndex ? 'flex' : 'none',
                fontFamily: fonts[index],
                opacity: index === currentIndex ? 1 : 0,
                letterSpacing: index === 1 || index === 3 ? 0 : '3px',
              }}
            >
              {name}
            </div>
          ))}

          <h3 className="intro-name">Mohammed Ahnafur Rahman</h3>
          <ul className="chip-list intro-roles">
            {roles.map((r) => <li key={r.label} className={`chip chip-${r.tone}`}>{r.label}</li>)}
          </ul>
          <ul className="chip-list intro-stack">
            {stack.map((s) => <li key={s} className="chip chip-sky">{s}</li>)}
          </ul>
        </header>

        <div className="blurb">
          <h2>About Me</h2>
          <p>
            Hi, I&apos;m Mohammed, a software engineer, visual product designer and
            futuristic visionary artist from
            {' '}
            <mark className="hl hl-mint">Dhaka, Bangladesh</mark>
            . For
            {' '}
            <mark className="hl hl-yellow">4+ years</mark>
            {' '}
            I&apos;ve been designing and shipping production web apps where code and
            design meet. I&apos;m currently a
            {' '}
            <mark className="hl hl-peach">Senior Frontend Engineer at Munchies</mark>
            .
          </p>
          <p>
            I&apos;ve built AI-powered learning platforms used by
            {' '}
            <mark className="hl hl-yellow">100K+ students</mark>
            , real-time WebSocket dashboards for
            {' '}
            <mark className="hl hl-yellow">8,000+ concurrent users</mark>
            , and payment &amp; ordering flows with bKash and SSL.
          </p>
          <p>
            As a
            {' '}
            <mark className="hl hl-lilac">UI/UX and product designer</mark>
            , I craft pixel-perfect, futuristic interfaces, from trading dashboards for
            AI Trade Inc (USA) to the next-gen customer experience at Munchies. Away from
            the screen, I create Islamic geometric patterns and Arabic calligraphy.
          </p>
          <p>
            I work mostly in
            {' '}
            <mark className="hl hl-sky">React, NextJS, TypeScript and NodeJS</mark>
            , with NestJS, PostgreSQL, MongoDB and AWS on the backend. I studied
            Electronics &amp; Communication Engineering
            {' '}
            <a href="http://www.nu.ac.bd/">(ECE)</a>
            {' '}
            at National University.
          </p>
        </div>
        <ul className="actions">
          <li>
            {!router.pathname.includes('/resume') ? <Link href="/resume" className="button">Learn More</Link> : <Link href="/about" className="button">About Me</Link>}
          </li>
        </ul>
      </section>

      <section id="footer">
        <ContactIcons />
        <p className="copyright">
          &copy; Mohammed Ahnaf
          {' '}
          <Link href="/">ahnafya.com</Link>
          .
        </p>
      </section>
    </section>
  );
}

export default SideBar;
