import { useRef, useEffect, useState, useCallback } from 'react';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';
import { gsap } from 'gsap';
import Link from 'next/link';
import SocialLinks from '@/components/SocialLinks';
import styles from '@/styles/components/mobilemenu.module.scss';

const MobileMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const bottom = useRef<HTMLDivElement>(null);
  const top = useRef<HTMLUListElement>(null);
  const tl = useRef(null);
  const links = useRef<HTMLLIElement>(null);

  const openShopMenu = useCallback(
    () => setOpenMenu(openMenu => !openMenu),

    [setOpenMenu]
  );

  useIsomorphicLayoutEffect(() => {
    tl.current = gsap.timeline({ pause: true });
    let links = gsap.utils.toArray('#link');
    let ctx = gsap.context(() => {
      tl.current
        .to(document.body, { overflow: 'hidden', ease: 'power3.inOut' })
        .to('#cont', {
          duration: 0.1,
          css: { display: 'block' },
        })
        .to('#menuBtnDiv', {
          duration: 0.2,
          y: 50,
          color: '#ffffff',
        })
        .to('#btn', {
          borderColor: '#ffffff',
        })
        .fromTo(
          '#menuBtnDiv2',
          {
            duration: 0.2,
            y: -100,
          },
          {
            y: -25,
            color: '#ffffff',
          },
          '-=.15'
        )
        .fromTo(
          '#top',
          { xPercent: 110 },
          {
            duration: 0.9,
            transformOrigin: 'right top',
            xPercent: 0,
            ease: 'power3.inOut',
            stagger: {
              amount: 0.3,
            },
          },
          '-=50%'
        )
        .fromTo(
          '#bottom',
          { xPercent: -110 },
          {
            duration: 0.9,
            transformOrigin: 'right top',
            xPercent: 0,
            ease: 'power3.inOut',
            stagger: {
              amount: 0.3,
            },
          },
          '-=50%'
        )
        .fromTo(
          links,
          { yPercent: 100, opacity: 0 },
          {
            duration: 0.5,
            yPercent: 0,
            opacity: 1,
            stagger: {
              amount: 0.2,
            },
          }
        ),
        '+=1.5';
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    openMenu ? tl.current.play() : tl.current.reverse();
    if (openMenu) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [tl, openMenu]);

  return (
    <>
      {/* <button className={styles.button} id='btn' onClick={openShopMenu}>
        <div id='label'>
          <span id='menuBtn'>
            <div id='menuBtnDiv'>MENU</div>
            <div id='menuBtnDiv2'>CLOSE</div>
          </span>
        </div>
      </button> */}

      <div className={styles.menu} id='cont'>
        <div className={styles.links}>
          <ul className={styles.top} ref={top} id='top'>
            <li onClick={openShopMenu} ref={links} id='link'>
              <Link href={'/'}>Home</Link>
            </li>
            <li onClick={openShopMenu} ref={links} id='link'>
              <Link href={'about'}>About</Link>
            </li>
            <li onClick={openShopMenu} ref={links} id='link'>
              <Link href={'schedule'}>Schedule</Link>
            </li>
            <li onClick={openShopMenu} ref={links} id='link'>
              <Link href={'team'}>Team</Link>
            </li>
            <li onClick={openShopMenu} ref={links} id='link'>
              <Link href={'contact'}>Contact</Link>
            </li>
            <li onClick={openShopMenu} ref={links} id='link'>
              <Link href='donate'>Donate</Link>
            </li>
          </ul>
          <div className={styles.bottom} ref={bottom} id='bottom'>
            <div>
              <div>
                <p>
                  Merrimack Valley Spartans <br /> Football & Cheer
                </p>
                <p>Methuen, Massachusetts, United States</p>
                <p>MVSpartansFootball@gmail.com</p>
              </div>
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
