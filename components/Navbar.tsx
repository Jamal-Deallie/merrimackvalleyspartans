import Link from 'next/link';
import CustomImage from '@/components/CustomImage';
import NavLink from '@/components/NavLink';
import { links } from '@/src/data/data';
import MobileMenu from '@/components/MobileMenu';
import styles from '@/styles/components/Navbar.module.scss';

export default function Navbar() {
  return (
    <nav className={styles.container}>
      <div className={styles.wrap}>
        <Link href='/'>
          <div className={styles.image}>
            <div className={styles.image}>
              <CustomImage
                src='/images/logo.png'
                alt='team'
                height_ratio={614}
                width_ratio={369}
                width={'100%'}
                fit={'contain'}
              />
            </div>
          </div>
        </Link>
        <div className={styles.options}>
          <div className={styles.links}>
            {links.map(({ id, label, path }) => {
              return (
                <div key={id}>
                  <NavLink href={path}>{label}</NavLink>
                </div>
              );
            })}
          </div>
          <Link href='donate'>
            <button className={styles.button}>Donate</button>
          </Link>
        </div>
        <MobileMenu />
      </div>
    </nav>
  );
}
