import { useState, useCallback, useRef, useEffect } from 'react';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';
import { gsap } from 'gsap';
import styles from '@/styles/components/Accordion.module.scss';

type Props = {};

export default function Accordion({}: Props) {
  const [open, setOpen] = useState<boolean>(false);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const root = useRef<HTMLDivElement>(null);

  const openAccordion = useCallback(
    () => setOpen(open => !open),

    [setOpen]
  );

  useIsomorphicLayoutEffect(() => {
    tl.current = gsap.timeline({ pause: true });
    let paths = gsap.utils.toArray('#path');
    let ctx = gsap.context(() => {
      tl.current
        .to('#arrow', {
          rotation: 180,
          duration: 0.75,
          ease: 'power3.in',
        })
        .to('#arrow', {
          backgroundColor: 'rgb(253, 97, 21)',
          fill: '#ffffff',
        })

        .to('#inner', {
          height: 'auto',
          duration: 0.75,
          ease: 'power3.in',
        });
    }, root);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    open ? tl.current.play() : tl.current.reverse();
  }, [tl, open]);

  return (
    <section className={styles.container} ref={root}>
      <div className={styles.line} />

      <div className={styles.wrapper}>
        <button className={styles.toggle} onClick={openAccordion}>
          <div className={styles.question}>
            <p>Question</p>
          </div>

          <div className={styles.arrow} id='arrow'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'>
              <path d='M24 44 10 28h28z' id='path' />
              <path d='M19 4h10v26H19z' id='path' />
            </svg>
          </div>
        </button>

        <div className={styles.answer} id='outer'>
          <div className={styles.outer}>
            <div className={styles.inner} id='inner'>
              <p id='answer'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                tortor quam, varius sed nulla eu, sodales ornare nisl. Aliquam
                sodales nunc sit amet odio tempus aliquet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
