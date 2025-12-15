import React from 'react';

type Props = {
  size?: number;
  className?: string;
};

const ReactIcon: React.FC<Props> = ({ size = 18, className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="-50 -50 100 100"
    className={className}
    aria-hidden="true"
  >
    <g stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round">
      <ellipse rx="32" ry="10" />
      <ellipse rx="32" ry="10" transform="rotate(60)" />
      <ellipse rx="32" ry="10" transform="rotate(120)" />
    </g>
    <circle r="6" fill="currentColor" />
  </svg>
);

export default ReactIcon;
