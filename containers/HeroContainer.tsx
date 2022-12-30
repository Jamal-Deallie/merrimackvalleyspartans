import { useRef, Suspense } from 'react';
import Video from '@/components/Video';
import { useIsomorphicLayoutEffect } from '@/src/hooks/useIsomorphicLayout';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitText from 'gsap/dist/SplitText';
import styles from '@/styles/containers/Hero.module.scss';
import SignUpNow from '@/src/svgs/signupnow';
import ArrowRight from '@/src/svgs/arrowright';

const Hero = () => {
  const root = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const tl2 = useRef<gsap.core.Timeline | null>(null);
  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    let ctx = gsap.context(() => {
      tl.current = gsap.timeline();
      let q = gsap.utils.selector(root);
      let targets = gsap.utils.toArray(q('span'));

  

      tl.current
        .fromTo(
          targets,
          { yPercent: 250, skewY: 10, overflow: 'hidden' },
          {
            duration: 2,
            yPercent: 0,
            ease: 'power4',
            skewY: 0,
            stagger: 0.5,
          }
        )
        .fromTo(
          '#copy',
          { yPercent: 100, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 1, ease: 'circ.out' },
          '-=1'
        )
        .fromTo(
          '#vid',
          { opacity: 0 },
          { opacity: 1, duration: 1, ease: 'circ.out' }
        );
    }, root);

    return () => ctx.revert();
  }, []);

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    let ctx = gsap.context(() => {
      tl2.current = gsap.timeline();
      tl2.current
        .fromTo(
          '#btn',
          { opacity: 0 },
          { opacity: 1, delay: 1, duration: 1.2, ease: 'circ.out' }
        )
        .to('#signup', {
          rotation: '+=360',
          repeat: -1,
          ease: 'none',
          duration: 4,
        });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.container} ref={root}>
      <div className={styles.wrap}>
        <div className={styles.heading}>
          <div className={styles.flex}>
            <div className={styles.title}>
              <div className={styles.line}>
                <span>Become a part</span>
              </div>
              <div className={styles.line}>
                <span> of the spartan</span>
              </div>
              <div className={styles.line}>
                <span> family</span>
              </div>
            </div>
            <div className={styles.cta}>
              <div>
                <div className={styles.copy}>
                  <p id='copy'>
                    The Spartans are here to give the youth the best chance of
                    growing on and off the field. We {"don't"} want to be average.
                    We want to be GREAT!
                  </p>
                </div>
                <div id='btn'>
                  <div className={styles.button}>
                    <div className={styles.sign} id='signup'>
                      <SignUpNow />
                    </div>
                    <div className={styles.arrow}>
                      <ArrowRight />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.vid}>
        <div className={styles.colors}>
          <div></div>
          <div></div>
        </div>

        <div className={styles.video} id='vid'>
          <Suspense fallback={<div>Loading...</div>}>
            <div id='video'>
              <Video mpegSrc={'/videos/spartans_vid.mp4'} />
            </div>
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default Hero;
