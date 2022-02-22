import React from 'react';
import { Link } from 'react-router-dom';
import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>АХЬНАФЯ</h2>
        {/* <h2>AhnÁfİya</h2> */}
        <h3>Mohámmed Ahnáf Al Rohmány</h3>
        {/* <p><a href="mailto:mail@saharukh.com">mail@saharukh.com</a></p> */}
        <p>Engineer, Student, Artist & Poet.</p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Mohammed. I like building things.
        I am a student of Electronics and Communication Engineering <a href="http://www.nu.ac.edu/">(ECE)</a> and
        Web Application Developer @ <a href="https://ahnafyaes.org/">My Home</a>.
        {/* Before Arthena I was
        at <a href="https://matroid.com">Matroid</a>
        , <a href="https://planet.com">Planet</a>
        , <a href="https://planetaryresources.com">Planetary Resources</a>
        , <a href="https://facebook.com">Facebook</a>
        , and <a href="https://seds.org">SEDS</a>. */}
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Mohammed Ahnaf Al Rahmany <Link to="/">ahnafya.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
