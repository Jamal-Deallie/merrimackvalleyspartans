import IconLink from '@/components/IconLink';
import CustomImage from '@/components/CustomImage';
import styles from '@/styles/containers/quote.module.scss';

type Props = {};

const Quote = (props: Props) => {
  return (
    <section className={styles.container}>
      <div className={styles.outer}>
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

          <div className={styles.quote}>
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
              <p>
                WE ARE OPTIMISTIC, EVOLVING AND ALWAYS READY TO CORRECT
                OURSELVES
              </p>
              <IconLink variant={'tertiary'}>Meet Our Team</IconLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;
