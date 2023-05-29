import React from 'react';
import { Github } from 'react-bootstrap-icons';
import { Facebook } from 'react-bootstrap-icons';
import { Instagram } from 'react-bootstrap-icons';
import { Linkedin } from 'react-bootstrap-icons';
import { Twitter } from 'react-bootstrap-icons';

// import data from '../../data/contact';


const data = [
  {
    link: 'https://github.com/mohammadaahnaaf',
    label: 'Github',
    icon: <Github />,
  },
  {
    link: 'https://facebook.com/aahnaf.19',
    label: 'Facebook',
    icon: <Facebook />,
  },
  {
    link: 'https://instagram.com/aahnafiya',
    label: 'Instagram',
    icon: <Instagram />,
  },
  {
    link: 'https://www.linkedin.com/in/aahnafiya',
    label: 'LinkedIn',
    icon: <Linkedin />,
  },
  {
    link: 'https://twitter.com/aahnafiya',
    label: 'Twitter',
    icon: <Twitter />,
  }
];

const ContactIcons = () => (
  <ul className="icons">
    {data.map((a) => (
      <li key={a.label}>
        <a href={a.link}>
          {a.icon}
        </a>
      </li>
    ))}
  </ul>
);

export default ContactIcons;
