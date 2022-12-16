import Link from 'next/link';
import Image from 'next/image';
import Button from '../Button/Button';
import { ImageWrap, Nav, Inner, Options, Links } from './styles';
import { NavLink } from '@/components/index';
import { links } from '@/src/data/data';
import MobileMenu from '@/components/MobileMenu/MobileMenu';

export default function Navbar() {
  return (
    <Nav>
      <Inner>
        <Link href='/'>
          <ImageWrap>
            <Image
              src={'/images/logo.png'}
              alt='Merrimack Valley Spartans Logo'
              fill
              object-fit='cover'
              sizes='100%'
            />
          </ImageWrap>
        </Link>
        <Options>
          <Links>
            {links.map(({ id, label, path }) => {
              return (
                <div key={id}>
                  <NavLink href={path}>{label}</NavLink>
                </div>
              );
            })}
          </Links>
          <Link href='donate'>
            <Button variant='outline_secondary'>Donate</Button>
          </Link>
        </Options>
        <MobileMenu />
      </Inner>
    </Nav>
  );
}
