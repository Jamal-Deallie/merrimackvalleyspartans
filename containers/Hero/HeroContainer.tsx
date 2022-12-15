import {
  Main,
  Title,
  Description,
  CodeTag,
  Line,
  Subheader,
} from '../../styles/sharedstyles';
import Video from '@/components/Video/Video';
import { Suspense } from 'react';
import { Container } from './styles';

const Hero = () => {
  return (
    <Container>
      <Subheader>Merrimack Valley</Subheader>
      <Title>SPARTANS</Title>
      <Line />
      <Suspense fallback={<div>Loading...</div>}>
        <Video mpegSrc={'/videos/spartans.mp4'} />
      </Suspense>
    </Container>
  );
};

export default Hero;
