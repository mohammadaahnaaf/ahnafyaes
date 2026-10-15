import React from 'react';

import Highlight from '../Highlight';
import type { Tone } from '../../types';

const lines: { cmd: string; out: string; tone: Tone }[] = [
  { cmd: 'whoami', out: '**MD Ahnafur Rahman** — Software Engineer', tone: 'mint' },
  { cmd: 'cat stack.txt', out: '**React · NextJS · TypeScript · NodeJS**', tone: 'sky' },
  { cmd: 'cat now.txt', out: 'Senior Frontend @ Munchies · Freelance Frontend & UI/UX', tone: 'yellow' },
  { cmd: 'uptime', out: 'Shipping web apps since **2022** · Dhaka, Bangladesh', tone: 'yellow' },
];

const Terminal = () => (
  <div className="terminal" aria-label="About me, as a terminal session">
    <div className="terminal-bar">
      <span className="terminal-dots" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      <span className="terminal-title">ahnaf@portfolio: ~</span>
    </div>
    <div className="terminal-body">
      {lines.map(({ cmd, out, tone }) => (
        <React.Fragment key={cmd}>
          <p className="terminal-cmd">{cmd}</p>
          <p className="terminal-out"><Highlight text={out} tone={tone} /></p>
        </React.Fragment>
      ))}
      <p className="terminal-cmd terminal-cursor" />
    </div>
  </div>
);

export default Terminal;
