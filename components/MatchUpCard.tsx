import React from 'react';
import styles from '@/styles/components/IconLink.module.scss';

type Props = {};
const MatchUpCard = ({}: Props) => {
  return (
    <div className={styles.card}>
      <div>
        <div className={styles.top}>
          <div>
            <span>Week 1</span>
            <span>Date</span>
          </div>
          <div>score</div>
        </div>
        <div className={styles.line} />
      </div>
      <div>Team</div>
      <div className={styles.location}>
        <svg>
          <path d='M6 3.2c-1.5 0-2.7 1.2-2.7 2.6 0 1.4 1.2 2.6 2.7 2.6s2.7-1.2 2.7-2.6c0-1.4-1.2-2.6-2.7-2.6zM6 0c3.3 0 6 2.6 6 5.8 0 1.2-.8 2.9-1.3 3.9L6 18 1.3 9.6C.8 8.7 0 6.9 0 5.8 0 2.6 2.7 0 6 0z' />
        </svg>
        <span>Location</span>
      </div>
    </div>
  );
};

export default MatchUpCard;
