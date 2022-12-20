import styles from '@/styles/containers/Staff.module.scss';
import { staff, headcoaches } from '@/data/staff';

type Props = {};

const StaffContainer = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.outer}>
        <div className={styles.inner}>
          <div className={styles.heading}>
            <h1 id='heading'>Our</h1>
            <h1 id='heading'>Staff</h1>
          </div>
          <div className={styles.desc}>
            <p className='fullscreen' id='splitBody'>
              Sit nemo veniam ut repudiandae quos aut quas voluptas sit repellat
              sint et unde reiciendis sed consequatur aspernatur est sint
              incidunt. Aut iure vitae eos cupiditate doloremque qui magni quia
              sit minus internos.
            </p>
          </div>

          <div className={styles.teams}>
            {staff.map(({ id, image, name, title }) => {
              return (
                <div key={id} className={styles.col}>
                  <div className={styles.wrap}>
                    <p>{name}</p>

                    <p>{title}</p>

                    <div className={styles.line}></div>
                    <div className={styles.box}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.outer}>
        <div className={styles.inner}>
          <div className={styles.heading}>
            <h1 id='heading'>The</h1>
            <h1 id='heading'>Coaches</h1>
          </div>
          <div className={styles.desc}>
            <p className='fullscreen' id='splitBody'>
              Sit nemo veniam ut repudiandae quos aut quas voluptas sit repellat
              sint et unde reiciendis sed consequatur aspernatur est sint
              incidunt. Aut iure vitae eos cupiditate doloremque qui magni quia
              sit minus internos.
            </p>
          </div>

          <div className={styles.teams}>
            {headcoaches.map(({ id, image, name, title }) => {
              return (
                <div key={id} className={styles.col}>
                  <div className={styles.wrap}>
                    <p>{name}</p>

                    <p>{title}</p>

                    <div className={styles.line}></div>
                    <div className={styles.box}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffContainer;
