import React from 'react';

import type { SkillGroup } from '../../types';

interface SkillsProps {
  groups?: SkillGroup[];
}

const Skills = ({ groups = [] }: SkillsProps) => (
  <div className="skills">
    <div className="link-to" id="skills" />
    <div className="title">
      <h3>Skills</h3>
    </div>
    <div className="skill-groups">
      {groups.map((group) => (
        <section className="skill-group" key={group.name}>
          <h4 className="skill-group-name">{group.name}</h4>
          <ul className="chip-list">
            {group.skills.map((skill) => (
              <li key={skill} className={`chip chip-${group.tone}`}>{skill}</li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  </div>
);

export default Skills;
