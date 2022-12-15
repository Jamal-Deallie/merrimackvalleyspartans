import React from 'react';
import { Wrap } from './styles';
import Link from 'next/link';
type IconLinkProps = {
  label: string;
};

const IconLink = ({ label }: IconLinkProps) => {
  return (
    <Wrap>
      <span>{label}</span>
      <div>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 15 10'>
          <path
            fillRule='evenodd'
            d='M9.87918 9.89961L8.46497 8.48539l2.53663-2.53663H0v-2h10.9996L8.46508 1.41421 9.87929 0 14.829 4.94975l-.0001.00011-1.4141 1.4141-3.53562 3.53565zM12 4.94914v.00122l.0006-.00061L12 4.94914z'
            clipRule='evenodd'></path>
        </svg>
      </div>
    </Wrap>
  );
};

export default IconLink;
