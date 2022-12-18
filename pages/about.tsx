import Link from 'next/link';
import type { NextPage } from 'next';
import AboutUs from '@/containers/AboutContainer';
import Sponsors from '@/containers/SponsorsContainer';

const About: NextPage = () => {
  return (
    <>
      <AboutUs />
      <Sponsors />
    </>
  );
};

export default About;
