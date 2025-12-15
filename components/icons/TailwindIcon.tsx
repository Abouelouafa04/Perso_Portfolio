import React from 'react';

type Props = {
  size?: number;
  className?: string;
};

const TailwindIcon: React.FC<Props> = ({ size = 18, className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    className={className}
    aria-hidden="true"
  >
    <path
      fill="currentColor"
      d="M2 12s4.5-3 8-3c3.5 0 6 3 10 3 0 0-4.5 4-8 4-3.5 0-6-4-10-4-1.5 0-2 0-2 0zM2 18s4-3 8-3c3.5 0 6 3 10 3 0 0-4 4-8 4-3.5 0-6-4-10-4z"
    />
  </svg>
);

export default TailwindIcon;
