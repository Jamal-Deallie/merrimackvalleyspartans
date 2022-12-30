import { useRef, useEffect } from 'react';
import Link from 'next/link';
import styles from '@/styles/containers/Cta.module.scss';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { gsap } from 'gsap';
import { DrawSVGPlugin } from 'gsap/dist/DrawSVGPlugin';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useIsomorphicLayoutEffect } from '@/src/hooks/useIsomorphicLayout';

type CTAProps = {
  email?: string;
};

const MessageSchema = Yup.object().shape({
  email: Yup.string().required('Email is required').email('Email is invalid'),
});

const CTA = ({ email }: CTAProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm<CTAProps>({
    resolver: yupResolver(MessageSchema),
  });

  const tl = useRef<gsap.core.Timeline | null>(null);
  const root = useRef<HTMLDivElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin);
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: '"top top+=50px"',
          end: 'bottom bottom',
          toggleActions: 'play none none reset',
          immediateRender: true,
        },
      });

      tl.current.fromTo(
        '#path',
        { drawSVG: '0%' },
        {
          duration: 0.8,
          drawSVG: '100%',
          ease: 'sine.out',
        }
      );
    }, root);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful]);

  const onSubmit = handleSubmit(data => {
    console.log(data);
  });
  return (
    <section className={styles.container} ref={root}>
      <div className={styles.wrap}>
        <div className={styles.flex}>
          <div className={styles.heading}>
            <h1>
              <span className={styles.circle}>
                <span>SIGN</span>
                <svg viewBox='0 0 500 150' preserveAspectRatio='none'>
                  <path
                    id='path'
                    fill='none'
                    d='M325 18C228.7-8.3 118.5 8.3 78 21 22.4 38.4 4.6 54.6 5.6 77.6c1.4 32.4 52.2 54 142.6 63.7 66.2 7.1 212.2 7.5 273.5-8.3 64.4-16.6 104.3-57.6 33.8-98.2C386.7-4.9 179.4-1.4 126.3 20.7'
                  />
                </svg>{' '}
              </span>

              <span className={styles.word} id='word'>
                UP
              </span>
              <span className={styles.word} id='word'>
                HERE
              </span>
              <span className={styles.word} id='word'>
                FOR
              </span>
              <span className={styles.word} id='word'>
                THE
              </span>
              <span className={styles.word} id='word'>
                LATEST
              </span>
              <span className={styles.word} id='word'>
                NEWS
              </span>
              <span className={styles.word} id='word'>
                AND
              </span>
              <span className={styles.word} id='word'>
                UPDATES.
              </span>
            </h1>
          </div>
          <form className={styles.form} onSubmit={onSubmit}>
            <div className={styles.field}>
              <label>Email Address</label>
              <input type='email' {...register('email')} />
              {errors.email ? (
                <p style={{ color: 'red' }}>{errors.email?.message}</p>
              ) : null}
            </div>

            <button className={styles.submit}>
              {/* {isSubmitting ? <span>Submitting...</span> : <span>Submit</span>} */}
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTA;
