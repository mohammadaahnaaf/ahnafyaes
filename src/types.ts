import type { ReactNode } from 'react';

export interface Route {
  index?: boolean;
  label: string;
  path: string;
}

export interface Project {
  title: string;
  subtitle: string;
  image: string;
  link?: string;
  date: string;
  desc: string;
}

export interface Artwork {
  title: string;
  subtitle: string;
  image: string;
  tag: string[];
}

export interface Degree {
  school: string;
  degree: string;
  link: string;
  year: string;
}

// Wrap text in **double asterisks** to highlight it.
export interface Position {
  company: string;
  position: string;
  link?: string;
  daterange: string;
  points: string[];
}

// Light background tones used to highlight key information.
export type Tone = 'yellow' | 'mint' | 'sky' | 'lilac' | 'peach';

export interface SkillGroup {
  name: string;
  tone: Tone;
  skills: string[];
}

export interface Reference {
  name: string;
  title: string;
  link?: string;
}

export type StatValue = ReactNode;

export interface Stat {
  key?: string;
  label: string;
  value?: StatValue;
  link?: string;
  format?: (value: StatValue) => ReactNode;
}
