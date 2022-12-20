import { ReactNode } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import styles from '@/styles/components/Layout.module.scss';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
