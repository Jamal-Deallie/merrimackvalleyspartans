import { useRef, useEffect } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import styles from '@/styles/containers/Cta.module.scss';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

type CTAProps = {
  email?: string;
};

const MessageSchema = Yup.object().shape({
  email: Yup.string().required('Email is required').email('Email is invalid'),
});

type Props = {};

const CTA = ({ email }: CTAProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm<CTAProps>({
    resolver: yupResolver(MessageSchema),
  });

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
    <section className={styles.container}>
      <div className={styles.wrap}>
        <div className={styles.flex}>
          <div className={styles.heading}>
            <h1>
              {/* <mark className={styles.circle}>
                <svg viewBox='0 0 500 150' preserveAspectRatio='none'>
                  <path
                    fill='none'
                    d='M325 18C228.7-8.3 118.5 8.3 78 21 22.4 38.4 4.6 54.6 5.6 77.6c1.4 32.4 52.2 54 142.6 63.7 66.2 7.1 212.2 7.5 273.5-8.3 64.4-16.6 104.3-57.6 33.8-98.2C386.7-4.9 179.4-1.4 126.3 20.7'
                  />
                </svg>{' '}
              </mark> */}
              SIGN UP HERE FOR THE LATEST NEWS AND UPDATES.
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
