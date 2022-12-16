import { useMemo, ReactNode } from 'react';
import Link from 'next/link';
import {
  FooterContainer,
  TopRow,
  BottomRow,
  InnerRow,
  Description,
  LinkContainer,
  Line,
} from './styles';
import SocialLinks from '@/components/SocialLinks/SocialLinks';
export default function Footer() {
  const currYear = useMemo(() => {
    let dt = new Date();
    let my_time = dt.getFullYear();
    return my_time;
  }, []);

  return (
    <FooterContainer>
      <Line />
      <TopRow>
        <InnerRow>
          <Description>
            <h6>Merrimack Valley Spartans</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Description>

          <LinkContainer>
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
                  <Link href='donate'>
                    Donate
                  </Link>
                </li>
                <li>
                  <Link href='privacypolicy'>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href='sitemap'>Sitemap</Link>
                </li>
              </ul>
            </div>
          </LinkContainer>
        </InnerRow>
      </TopRow>
      <hr />
      <BottomRow>
        <div>
          <p>
            Copyright © {currYear} All Rights Reserved by Merrimack Valley
            Spartans
          </p>
        </div>

        <div>
          <SocialLinks />
        </div>
      </BottomRow>
    </FooterContainer>
  );
}
