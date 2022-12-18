import IconLink from '@/components/IconLink';
import styles from '@/styles/containers/mission.module.scss';

const Mission = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrap}>
        <div className={styles.mission}>
          <p>
            Our <span> mission</span> is to <span> provide</span> a{' '}
            <span> positive</span> football and <span> cheer</span> experience
            by <span> supporting</span> each <span> athlete</span> to reach
            their <span> fullest</span> <span> potential</span> both on and off
            the field.
          </p>
          <IconLink variant={'tertiary'}>Read our Mission</IconLink>
        </div>
      </div>
    </section>
  );
};

export default Mission;
