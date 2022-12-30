import IconLink from '@/components/IconLink';
import styles from '@/styles/containers/Mission.module.scss';
import TextSplit from '@/src/animations/TextSplit';
import cn from 'classnames';
const Mission = () => {
  return (
    <TextSplit>
      <section className={styles.container}>
        <div className={styles.wrap}>
          <div className={cn(styles.mission, 'fullscreen')}>
            <p id='lineReveal'>
              Our <span> mission</span> is to <span> provide</span> a{' '}
              <span> positive</span> football and <span> cheer</span> experience
              by <span> supporting</span> each <span> athlete</span> to reach
              their <span> fullest</span> <span> potential</span> both on and
              off the field.
            </p>
            <IconLink variant={'tertiary'}>Read our Mission</IconLink>
          </div>
        </div>
      </section>
    </TextSplit>
  );
};

export default Mission;
