import type { NextPage } from 'next';
import AboutUs from '@/containers/AboutContainer';
import Sponsors from '@/containers/SponsorsContainer';
import Staff from '@/containers/StaffContainer';

const About: NextPage = () => {
  return (
    <>
      <AboutUs />
      <Sponsors />
      <Staff />
    </>
  );
};

export default About;
