import IconLink from '@/components/IconLink';
import CustomImage from '@/components/CustomImage';
import styles from '@/styles/containers/Quote.module.scss';
import QuoteTL from '@/src/animations/Quote';

type Props = {};

const Quote = (props: Props) => {
  return (
    <QuoteTL>
      <section className={styles.container}>
        <div className={styles.outer} id='outer'>
          <div className={styles.box} id='box'>
            <div className={styles.flex}>
              <div className={styles.wrap}>
                <CustomImage
                  src='/images/quote.webp'
                  alt='team'
                  height_ratio={2243}
                  width_ratio={2202}
                  width={'100%'}
                  fit={'contain'}
                />
              </div>

              <div className={styles.quote} id='quote'>
                <div className={styles.icon}>
                  <CustomImage
                    src='/icons/quote.svg'
                    alt='team'
                    height_ratio={19.07}
                    width_ratio={25.17}
                    width={'100%'}
                    fit={'contain'}
                  />
                </div>
                <div className={styles.content}>
                  <p id='text'>
                    WE ARE OPTIMISTIC, EVOLVING AND ALWAYS READY TO CORRECT
                    OURSELVES
                  </p>
                  <IconLink variant={'tertiary'}>Meet Our Team</IconLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.animation}>
          <div className={styles.inner} id='football'>
            <div className={styles.football}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 954.92 604.21'>
                <path
                  d='M954.92 298.11c-.16-17.92-9.15-56.59-67.65-114.14-24.42-24.03-54.9-48.63-90.6-73.14a717.155 717.155 0 0 0-103.25-59.26C618.45 16.76 542.89-.61 468.88.02 394.8.64 319.55 19.24 245.22 55.3c-34.51 16.71-68.92 37.2-102.25 60.92C17.95 205.13-.27 273.28 0 305.99c.18 21.53 9.36 66.4 68.85 124.94 21.11 20.78 47.09 41.78 77.17 62.45 33.87 23.25 68.61 43.18 103.2 59.22 74.98 34.84 150.54 52.2 224.57 51.6 74.06-.63 149.33-19.23 223.69-55.29 34.37-16.67 68.77-37.18 102.22-60.93 144.58-102.8 155.32-171.3 155.19-189.85m-410.21-50.79c-.13-17.46 26.94-17.69 27.08-.22l.33 40.64c20.01-.15 38.38-.3 54.16-.44l-.34-40.65c-.14-17.46 26.95-17.68 27.11-.21l.31 40.64 24.34-.2c17.46-.17 17.68 26.91.23 27.07l-24.36.2.31 40.6c.16 17.46-26.92 17.69-27.05.25l-.34-40.63-54.15.45.33 40.62c.14 17.46-26.96 17.67-27.08.24l-.34-40.63-54.17.45.33 40.6c.13 17.47-26.92 17.69-27.07.23l-.32-40.61-54.16.44c.11 13.54.23 27.07.32 40.61.15 17.46-26.94 17.67-27.09.23l-.31-40.62-54.16.44.31 40.62c.15 17.46-26.92 17.69-27.05.21l-.33-40.6c-11.55.07-20.07.16-24.36.18-17.45.14-17.67-26.92-.21-27.09l24.35-.19c-.11-13.56-.23-27.09-.32-40.61-.14-17.46 26.94-17.7 27.06-.26l.32 40.65 54.15-.45-.33-40.64c-.12-17.45 26.97-17.68 27.1-.22l.34 40.63 54.15-.45-.33-40.6c-.14-17.48 26.94-17.69 27.06-.26l.32 40.65 54.19-.43-.33-40.64M159.95 473.09c-4.34-2.97-8.39-5.96-12.54-8.95-13.86-50.34-21.39-104-21.82-159.2-.47-55.17 6.2-108.98 19.23-159.52 4.09-3.04 8.02-6.05 12.4-9.16a697.472 697.472 0 0 1 84.73-51.67c-29.67 64.73-45.5 140.36-44.85 219.78.63 79.39 17.67 154.73 48.39 218.99a701.524 701.524 0 0 1-85.54-50.28M700.8 519.6c29.65-64.75 45.45-140.35 44.8-219.76-.62-79.4-17.68-154.74-48.4-219.02a703.18 703.18 0 0 1 85.57 50.28c4.34 2.97 8.35 5.95 12.53 8.92 13.85 50.34 21.39 104.02 21.86 159.23.42 55.22-6.25 109.06-19.31 159.63-4.06 3-8.06 6-12.35 9.04a705.896 705.896 0 0 1-84.7 51.68'
                  style={{
                    fill: '#f54b1b',
                  }}
                />
              </svg>
            </div>
            <div className={styles.line} id='line' />
          </div>
        </div>
      </section>
    </QuoteTL>
  );
};

export default Quote;
