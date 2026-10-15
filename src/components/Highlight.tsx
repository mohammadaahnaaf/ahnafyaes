import React from 'react';

import type { Tone } from '../types';

interface HighlightProps {
  text: string;
  tone?: Tone;
}

// Renders text, wrapping each **marked** span in a light highlight.
const Highlight = ({ text, tone = 'yellow' }: HighlightProps) => (
  <>
    {text.split(/\*\*(.+?)\*\*/g).map((part, i) => (
      // Odd indices are the captured (highlighted) groups.
      // eslint-disable-next-line react/no-array-index-key
      i % 2 ? <mark key={i} className={`hl hl-${tone}`}>{part}</mark> : part
    ))}
  </>
);

export default Highlight;
