import React from 'react';
import { Link } from 'react-router-dom';
import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const style = {
  fontFamily: ['Julius Sans One', 'sans-serif']
}

const styles = {
  fontFamily: ['Zen Kaku Gothic New', 'sans-serif'],
  fontSize: '40px',
}
const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2 style={styles}>АХЬНАФЯ</h2>
        {/* <h2>AhnÁfİya</h2> */}
        <h3 style={style}>Mohámmed Ahnáf Al Rohmány</h3>
        <p style={style}>Engineer | Student | Artist | Poet</p>
      </header>
    </section>

    <section style={style} className="blurb">
      <h2 style={style}>About</h2>
      <p style={style}>Hi, I&apos;m Mohammed. I like building things.
        I am a student of Electronics and Communication Engineering <a href="http://www.nu.ac.edu/">(ECE)</a> and
        Web Application Developer @ <a href="https://ahnafyaes.tech/">My Home</a>.
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

    <section style={style} id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Mohammed Ahnaf Al Rahmany <Link to="/">ahnafyaes.tech</Link>.</p>
    </section>
  </section>
);

export default SideBar;
