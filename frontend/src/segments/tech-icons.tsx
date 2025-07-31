import React from 'react';
import Icon from './icon.tsx';
import { TechIconsPanel } from '../components/AppStyles.tsx';
import type { Technologies } from '../components/MainTypes.tsx';

interface TechIconsProps {
  technologies: Technologies[];
}

const TechIcons: React.FC<TechIconsProps> = ({ technologies }) => {
  return (
    <TechIconsPanel>
      {technologies.map((value) => (
        <Icon key={value.id} id={value.id} item={value} />
      ))}
    </TechIconsPanel>
  );
};

export default TechIcons;
