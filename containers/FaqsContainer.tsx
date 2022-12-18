import React from 'react';
import Accordion from '@/components/Accordion';
import styles from '@/styles/containers/faqs.module.scss';

type Props = {};

const Faqs = ({}: Props) => {
  return (
    <section className={styles.container}>
      <div className={styles.wrap}>
        <div className={styles.flex}>
          <div className={styles.heading}>
            <h1>Faqs</h1>
            <p>Frequently Asked Questions</p>
            <p>Here are some common questions about the Spartans</p>
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
          </div>
        </div>
      </div>
    </section>
  );
};
export default Faqs;
