import { useRef } from 'react';
import styles from '@/styles/containers/SignUp.module.scss';
import { signUpData } from '@/src/data/data';
import { useIsomorphicLayoutEffect } from '@/src/hooks/useIsomorphicLayout';
import { gsap } from 'gsap';
import { DrawSVGPlugin } from 'gsap/dist/DrawSVGPlugin';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

type Props = {};

const SignUpContainer = (props: Props) => {
  const root = useRef<HTMLDivElement | null>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin);
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: 'top top',
          end: 'bottom bottom',
          toggleActions: 'play none none reset',
          immediateRender: true,
          markers: true,
        },
      });

      tl.current
        .fromTo(
          '#path',
          { drawSVG: '0%' },
          {
            duration: 0.4,
            drawSVG: '100%',
            ease: 'sine.out',
          }
        )
        .fromTo(
          '#path1',
          { drawSVG: '0%' },
          {
            duration: 0.6,
            drawSVG: '100%',
            ease: 'sine.out',
          }
        );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.container} ref={root}>
      <div className={styles.outer}>
        <div className={styles.inner}>
          <div className={styles.heading}>
            <h1 id='heading'>Sign Up</h1>
            <h1 id='heading'>Now</h1>
            <div className={styles.desc}>
              <p className='fullscreen' id='splitBody'>
                Sit nemo veniam ut repudiandae quos aut quas voluptas sit
                repellat sint et unde reiciendis sed consequatur aspernatur est
                sint incidunt. Aut iure vitae eos cupiditate doloremque qui
                magni quia sit minus internos.
              </p>
            </div>
          </div>

          <div className={styles.table}>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>2023 Fall Registration</th>
                </tr>
              </thead>
              <tbody>
                {signUpData.map(({ id, details, subject }) => {
                  return (
                    <tr key={id}>
                      <td>{subject}</td>
                      <td>{details}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className={styles.disclaimer}>
              <span>*Dates may be subject to change.</span>
            </div>
          </div>
          <div className={styles.join}>
            <h1>Ready to</h1>
            <h1>Join?</h1>
            <div className={styles.desc}>
              <p className='fullscreen' id='splitBody'>
                Use the Link below to download the Registration Packet
              </p>
            </div>

            <button>
              <a href='https://img1.wsimg.com/blobby/go/481e6343-b51d-4de6-937b-5624df740755/downloads/2022%20registration%20packet.pdf?ver=1662771949589'>
                <div className={styles.btn}>
                  <span>Registration packet (pdf)</span>
                  <span className={styles.icon}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 800 800'>
                      <path
                        style={{
                          fill: 'none',
                        }}
                        d='M0 0h800v800H0z'
                      />
                      <path
                        d='M560.4 160v240h80V80H160v320h80.4V160h320Zm-80 80v240h120l-200 240-200-240h120V240h160Z'
                        style={{
                          fill: '#fff',
                        }}
                      />
                    </svg>
                  </span>
                </div>
              </a>
            </button>
          </div>
          <div className={styles.contact}>
            <div className={styles.inner}>
              <div className={styles.content}>
                <h3>
                  <span>Need More Info?</span>
                  Connect With Us
                </h3>

                <div className={styles.arrow}>
                  <svg
                    id='Layer_1'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 162.42 110.36'>
                    <path
                      className='cls-1'
                      d='M1 55.18h160.42M107.24 1l54.18 54.18-54.18 54.18'
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpContainer;
