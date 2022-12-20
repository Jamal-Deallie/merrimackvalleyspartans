import { useRef } from 'react';
import { useIsomorphicLayoutEffect } from '@/src/hooks/useIsomorphicLayout';
import BatchAnimation from '@/src/animations/BatchFade';
import HeadingAnimation from '@/src/animations/HeadingCenter';
import styles from '@/styles/containers/sponsors.module.scss';

type Props = {};

const Sponsors = () => {
  const ref = useRef();

  return (
    <div className={styles.container} ref={ref}>
      <div className={styles.wrap}>
        <h1 id='heading'>Our</h1>
        <h1 id='heading'>Sponsors</h1>

        <BatchAnimation>
          <div className={styles.flex} id='batch-wrap'>
            {Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9]).map(index => {
              return (
                <div className={styles.image} id='logo' key={index}>
                  <p>Logo Here</p>
                </div>
              );
            })}
          </div>
        </BatchAnimation>
      </div>
    </div>
  );
};

export default Sponsors;
