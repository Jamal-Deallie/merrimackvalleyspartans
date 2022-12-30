import React from 'react';
import styles from '@/styles/components/Card.module.scss';

type Props = {};
const MatchUpCard = ({}: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.wrap}>
        <div className={styles.top}>
          <div className={styles.inner}>
            <div className={styles.date}>
              <span>Week 1</span>
              <span>· Sun 09/11</span>
              <span>· Final</span>
            </div>
            <div className={styles.score}>
              <span>L 3 - 19</span>
            </div>
          </div>
          <div className={styles.line} />
        </div>

        <div className={styles.middle}>
          <div className={styles.opponent}>
            <span>Opponent Team</span>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.location}>
            <span>
              {/* <svg>
                <path d='M6 3.2c-1.5 0-2.7 1.2-2.7 2.6 0 1.4 1.2 2.6 2.7 2.6s2.7-1.2 2.7-2.6c0-1.4-1.2-2.6-2.7-2.6zM6 0c3.3 0 6 2.6 6 5.8 0 1.2-.8 2.9-1.3 3.9L6 18 1.3 9.6C.8 8.7 0 6.9 0 5.8 0 2.6 2.7 0 6 0z' />
              </svg> */}
              <span>Location</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchUpCard;
