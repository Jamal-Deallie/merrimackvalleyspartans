import { useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import styles from '@/styles/containers/cta.module.scss';
import SocialLinks from '@/components/SocialLinks';
import CustomImage from '@/components/CustomImage';

type Props = {};

const CTA = ({}: Props) => {
  const btnRef = useRef<HTMLDivElement>(null);
  const hoverOnEnter = () => {
    gsap.to(btnRef.current, { clipPath: 'circle(100%)' });
  };

  const hoverOnLeave = () => {
    gsap.to(btnRef.current, { clipPath: 'circle(0%)' });
  };

  return (
    <section className={styles.container}>
      <div className={styles.wrap}>
        <div className={styles.flex}>
          <div className={styles.grid}>
            {Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9]).map(index => {
              return (
                <div className={styles.image}>
                  <CustomImage
                    src='/images/placeholder.svg'
                    alt='team'
                    height_ratio={19.07}
                    width_ratio={25.17}
                    width={'100%'}
                    fit={'contain'}
                  />
                </div>
              );
            })}
          </div>

          <div className={styles.content}>
            <div className={styles.heading}>
              <h1>Follow Us</h1>
              <p>
                Keep up on the on Spartans Football and Cheerleading teams. Find
                news, video, standings, scores and schedule information.
              </p>
            </div>
            <SocialLinks variant={'secondary'} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
