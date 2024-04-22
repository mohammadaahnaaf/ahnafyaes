import React from 'react';
import { Github } from 'react-bootstrap-icons';
import { Facebook } from 'react-bootstrap-icons';
import { Instagram } from 'react-bootstrap-icons';
import { Linkedin } from 'react-bootstrap-icons';
import { Twitter } from 'react-bootstrap-icons';

// import data from '../../data/contact';


const data = [
    {
        link: 'https://www.linkedin.com/in/aahnafiya',
        label: 'LinkedIn',
        icon: <Linkedin size={24} />,
    },
    {
        link: 'https://github.com/mohammadaahnaaf',
        label: 'Github',
        icon: <Github size={24} />,
    },
    {
        link: 'https://facebook.com/aahnaf.19',
        label: 'Facebook',
        icon: <Facebook size={24} />,
    },
    {
        link: 'https://instagram.com/aahnafiya',
        label: 'Instagram',
        icon: <Instagram size={24} />,
    },
    {
        link: 'https://twitter.com/aahnafiya',
        label: 'Twitter',
        icon: <Twitter size={24} />,
    }
];

const ContactIconLarge = () => (
    <ul className="icons" style={{ paddingTop: '24px', paddingBottom: '10px' }}>
        {data.map((a) => (
            <li key={a.label}>
                <a href={a.link}>
                    {a.icon}
                </a>
            </li>
        ))}
    </ul>
);

export default ContactIconLarge;
