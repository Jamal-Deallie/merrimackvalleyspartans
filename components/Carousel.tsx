import {  useRef } from 'react';
import { gsap } from 'gsap';
import { horizontalLoop } from '@/src/helpers/horizontalLoop';
import { useIsomorphicLayoutEffect } from '@/src/hooks/useIsomorphicLayout';
import CustomImage from '@/components/CustomImage';
import styles from '@/styles/components/Carousel.module.scss';



const Carousel = () => {
  const root = useRef<HTMLDivElement>(null);
  const box = useRef<HTMLDivElement>(null);


  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(self => {
      let targets = gsap.utils.toArray('#items');
      console.log(targets);
      const config = {
        draggable: false,
        center: false,
        speed: 1,
        reversed: false,
        repeat: -1,
        snap: false,
      };
      horizontalLoop(targets, config);
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.inner} ref={root}>
        <div className={styles.wrap}>
          {Array.from(Array(10), (_, x) => {
            return (
              <div className={styles.wrapper} id='items' key={x}>
                <div className={styles.image}>
                  <CustomImage
                    src='/images/team_3.webp'
                    alt='team'
                    height_ratio={1}
                    width_ratio={1}
                    width={'100%'}
                    fit={'contain'}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
