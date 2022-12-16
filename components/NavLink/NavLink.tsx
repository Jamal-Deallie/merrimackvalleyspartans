import { ReactNode } from 'react';
import Link, { LinkProps } from 'next/link';
import { CustomLink } from './styles';

type NavLinkProps = LinkProps & {
  children: ReactNode;
  href: string;
  key?: string | number;
};

export default function NavLink({ children, href, key }: NavLinkProps) {
  return (
    <CustomLink href={href}>
      {children}
    </CustomLink>
  );
}
