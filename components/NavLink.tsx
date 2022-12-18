import { ReactNode } from 'react';
import Link, { LinkProps } from 'next/link';
import styles from '@/styles/components/navlink.module.scss'

type NavLinkProps = LinkProps & {
  children: ReactNode;
  href: string;
  key?: string | number;
};

export default function NavLink({ children, href, key }: NavLinkProps) {
  return (
    <Link href={href} className={styles.link}>
      {children}
    </Link>
  );
}
