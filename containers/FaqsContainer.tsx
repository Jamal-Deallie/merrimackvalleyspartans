import React from 'react';
import Accordion from '@/components/Accordion';
import styles from '@/styles/containers/Faqs.module.scss';


type Props = {};

const Faqs = ({}: Props) => {
  return (
    <section className={styles.container}>
      <div className={styles.wrap}>
        <div className={styles.flex}>
          <div>
            <div>
              <div className={styles.heading}>
                <h1>If you got questions</h1>
                <h1>We you got answers</h1>
                <p>Here are some common questions about the Spartans</p>
              </div>
            </div>
          </div>

          <div className={styles.accordion}>
            <div className={styles.wrapper}>
              <Accordion />
            </div>
            <div className={styles.wrapper}>
              <Accordion />
            </div>
            <div className={styles.wrapper}>
              <Accordion />
            </div>
            <div className={styles.wrapper}>
              <Accordion />
            </div>
            <div className={styles.wrapper}>
              <Accordion />
            </div>
            <div className={styles.wrapper}>
              <Accordion />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Faqs;
