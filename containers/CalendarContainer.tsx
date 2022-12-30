import MatchUpCard from '@/components/MatchUpCard';
import styles from '@/styles/containers/Calendar.module.scss';
type Props = {};

const Calendar = ({}: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.outer}>
        <div className={styles.heading}>
          <h1>{"Spartan's"} Schedule</h1>
          <h1>For the 2023 Season</h1>
        </div>
        <MatchUpCard />
      </div>
    </div>
  );
};

export default Calendar;
