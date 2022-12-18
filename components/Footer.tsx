import { useMemo } from 'react';
import Link from 'next/link';
import SocialLinks from '@/components/SocialLinks';
import styles from '@/styles/components/footer.module.scss';

export default function Footer() {
  const currYear = useMemo(() => {
    let dt = new Date();
    let my_time = dt.getFullYear();
    return my_time;
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.line} />
      <div className={styles.top}>
        <div className={styles.inner}>
          <div className={styles.desc}>
            <h6>Merrimack Valley Spartans</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className={styles.links}>
            <div>
              <ul>
                <li>
                  <Link href='about'>About</Link>
                </li>
                <li>
                  <Link href='schedule'>Schedule</Link>
                </li>
                <li>
                  <Link href='Team'>Team</Link>
                </li>
                <li>
                  <Link href='Contact'>Contact</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link href='donate'>Donate</Link>
                </li>
                <li>
                  <Link href='privacypolicy'>Privacy Policy</Link>
                </li>
                <li>
                  <Link href='sitemap'>Sitemap</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className={styles.bottom}>
        <div>
          <p>
            Copyright © {currYear} All Rights Reserved by Merrimack Valley
            Spartans
          </p>
        </div>

        <div>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}
