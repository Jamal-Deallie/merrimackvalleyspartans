import Link from 'next/link';
import type { NextPage } from 'next';
import {
  Container,
  Main,
  Title,
  Description,
} from '../components/sharedstyles';

const About: NextPage = () => {
  return (
    <Container>
      <Main>
        <Title>About Page</Title>
        <Description>
          <Link href='/'>&larr; Go Back</Link>
        </Description>
      </Main>
    </Container>
  );
};

export default About;
