import React from 'react';
import { Link } from 'react-router-dom';
import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const style = {
  fontFamily: ['Julius Sans One', 'sans-serif'],
  fontWeight: 'bold',
  paddingBottom: '10px'
}

function SideBar() {
  const names = ["АХЬНАФЯ", "আহনাফিয়া", "AHNAFYA", "احنفــــــــــيه"];
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    if (currentIndex >= names.length - 1) {
      setTimeout(() => { setCurrentIndex(0) }, 3000)
    } else {
      setTimeout(() => { setCurrentIndex(currentIndex + 1) }, 3000)
    }
  }, [currentIndex]);

  const fonts = [
    ['Noto Sans', "sans-serif"],
    ['Noto Sans Bengali', 'sans-serif'],
    ['Noto Sans', "sans-serif"],
    ['Noto Kufi Arabic', "sans-serif"],
  ]

  return (
    <section id="sidebar">
      <section id="intro">
        <Link to="/" className="logo">
          <img src={`${PUBLIC_URL}/images/me.png`} alt="My photo" />
        </Link>
        <header>

          {names.map((name, index) => {
            return index === currentIndex ? (
              <div
                key={index}
                style={{
                  transform: 'all',
                  color: 'black',
                  fontFamily: fonts[index],
                  fontSize: '40px',
                  fontWeight: '700',
                  opacity: index === currentIndex ? 1 : 0,
                  letterSpacing: index === 1 || index === 3 ? 0 : '3px',
                  transition: 'opacity 1s ease-in-out',
                }}
              >
                {name}
              </div>
            ) : null
          })}

          <h3 style={style}>Mohammed Ahnafur Rahman</h3>
          <p style={style}>Software Engineer | Artist | Poet</p>
        </header>
      </section>

      <section style={style} className="blurb">
        <h2 style={style}>About Me</h2>
        <p style={style}>Hi, I&apos;m Mohammed. I like building new things. Currently
          I am a studying Engineering in <a href="http://www.nu.ac.edu/">(ECE)</a> and I am skillful as a Javascript Developer .
        </p>
        <ul className="actions">
          <li>
            {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
          </li>
        </ul>
      </section>

      <section style={style} id="footer">
        <ContactIcons />
        <p className="copyright">&copy; Mohammed Ahnaf <Link to="/">ahnafyaes.tech</Link>.</p>
      </section>
    </section>
  )
};

export default SideBar;
