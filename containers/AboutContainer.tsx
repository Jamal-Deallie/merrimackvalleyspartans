import React from 'react';
import styles from '@/styles/containers/About.module.scss';
import CustomImage from '@/components/CustomImage';
type Props = {};

const AboutUs = ({}: Props) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrap}>
          <div className={styles.heading}>
            <h1>About Us</h1>
            <div className={styles.line} />
          </div>
          <div className={styles.flex}>
            <div className={styles.subheader}>
              <h1>Lorem ipsum dolor sit amet, consectetur</h1>
            </div>
            <div className={styles.copy}>
              <p>
                The Merrimack Valley Spartans are dedicated to providing a
                positive football and cheer experience by supporting each
                athlete to reach their fullest potential both on and off the
                field. We want to promote the value of family that combines
                safety, connection, acceptance, understanding, love, and a
                strong sense of community.
              </p>
              <p>
                We will focus our instruction on the building of fundamentals
                and all areas of skill development in addition to teaching the
                principles of good character, sportsmanship, leadership,
                discipline, self-esteem, and team comradery. As we help instill
                the core values of honesty, fairness, respect, trust, and
                self-confidence in every child, we can provide the youth of our
                community with a sports program that can be used to achieve both
                academic and personal success.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.image}>
        <CustomImage
          src='/images/team_6.webp'
          alt='team'
          height_ratio={570}
          width_ratio={1200}
          width={'100%'}
          fit={'contain'}
        />
      </div>
    </>
  );
};

export default AboutUs;
