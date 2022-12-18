import React from 'react';
import styles from '@/styles/containers/about.module.scss';
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
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
