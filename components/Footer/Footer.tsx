import { useMemo, ReactNode } from 'react';
import Link from 'next/link';
import { FooterContainer } from './styles';
import { Line } from '../sharedstyles';
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
      {/* <div>
        <Link href='/'>Logo</Link>
        <div>
          <p>Copyright © {currYear} Bond Plus. All rights reserved.</p>
        </div>
      </div>

      <div>
        <Link href='/'>LOG IN</Link>
        <Link href='/'>PRIVACY POLICY</Link>
        <Link href='/'>PRIVACY RIGHTS Manager</Link>
        <Link href='/'>Terms of Use</Link>
        <Link href='/'>Do Not Sell My Information</Link>
        <Link href='/'>Accessibility</Link>
      </div> */}
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12 col-md-6'>
            <h6>About</h6>
            <p className='text-justify'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>

          <div className='col-xs-6 col-md-3'>
            <p>Quick Links</p>
            <ul className='footer-links'>
              <li>
                <a href='http://scanfcode.com/about/'>About</a>
              </li>
              <li>
                <a href='http://scanfcode.com/contact/'>Schedule</a>
              </li>
              <li>
                <a href='http://scanfcode.com/contribute-at-scanfcode/'>Team</a>
              </li>
              <li>
                <a href='http://scanfcode.com/contribute-at-scanfcode/'>
                  Contact
                </a>
              </li>
              <li>
                <a href='http://scanfcode.com/contribute-at-scanfcode/'>
                  Donate
                </a>
              </li>
              <li>
                <a href='http://scanfcode.com/privacy-policy/'>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href='http://scanfcode.com/sitemap/'>Sitemap</a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 col-sm-6 col-xs-12'>
            <p className='copyright-text'>
              Copyright © {currYear} All Rights Reserved by
              <a href='#'>Merrimack Valley Spartans</a>.
            </p>
          </div>

          <div className='col-md-4 col-sm-6 col-xs-12'>
            <SocialLinks />
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}
