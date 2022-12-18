import { useRef, Suspense } from 'react';
import Video from '@/components/Video';
import { useIsomorphicLayoutEffect } from '@/src/hooks/useIsomorphicLayout';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitText from 'gsap/dist/SplitText';
import styles from '@/styles/containers/hero.module.scss';
import SignUpNow from '@/src/svgs/signupnow';
import ArrowRight from '@/src/svgs/arrowright';
const Hero = () => {
  const component = useRef<HTMLDivElement>(null);
  const root = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  // useIsomorphicLayoutEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger, SplitText);

  //   let ctx = gsap.context(() => {
  //     tl.current = gsap.timeline();

  //     tl.current
  //       .fromTo(
  //         '#heading',
  //         //   { y: 80, opacity: 0 },
  //         { x: '110%', opacity: 0 },
  //         {
  //           opacity: 1,
  //           x: '0%',

  //           duration: 1,
  //           ease: 'power3.out',
  //         }
  //       )
  //       .fromTo(
  //         '#subheader',
  //         //   { y: 80, opacity: 0 },
  //         { x: '-110%', opacity: 0 },
  //         {
  //           opacity: 1,
  //           x: '0%',

  //           duration: 1,
  //           ease: 'power3.out',
  //         }
  //       ),
  //       '.5';
  //   }, root);

  //   return () => ctx.revert();
  // }, []);

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    let ctx = gsap.context(() => {
      gsap.to('#signup', {
        rotation: '+=360',
        repeat: -1,
        ease: 'none',
        duration: 3,
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
              <h1 id='heading'>
                <span>Become a part</span>
                <span> of the spartan</span>
                <span> family</span>
              </h1>
            </div>
            <div className={styles.cta}>
              <div>
                <div className={styles.copy}>
                  <p>
                    The Spartans are here to give the youth the best chance of
                    growing on and off the field. We don't want to be average.
                    We want to be GREAT!
                  </p>
                </div>

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
      <div className={styles.vid}>
        <div className={styles.colors}>
          <div></div>
          <div></div>
        </div>

        <div className={styles.video}>
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
