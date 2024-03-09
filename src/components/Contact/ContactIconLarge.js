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
        icon: <Github size={30} color="black" />,
    },
    {
        link: 'https://facebook.com/aahnaf.19',
        label: 'Facebook',
        icon: <Facebook size={30} color="royalblue" />,
    },
    {
        link: 'https://instagram.com/aahnafiya',
        label: 'Instagram',
        icon: <Instagram size={30} color="purple" />,
    },
    {
        link: 'https://www.linkedin.com/in/aahnafiya',
        label: 'LinkedIn',
        icon: <Linkedin size={30} color="royalblue" />,
    },
    {
        link: 'https://twitter.com/aahnafiya',
        label: 'Twitter',
        icon: <Twitter size={30} color="royalblue" />,
    }
];

const ContactIconLarge = () => (
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

export default ContactIconLarge;
