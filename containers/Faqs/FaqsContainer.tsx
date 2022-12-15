import React from 'react';
import Accordion from '@/components/Accordion/Accordion';
import { Container, Heading, Accordions, Wrapper } from './styles';
import {
  Main,
  Title,
  Description,
  CodeTag,
  Line,
  Subheader,
} from '../../styles/sharedstyles';
type Props = {};

const Faqs = ({}: Props) => {
  return (
    <Container>
      <Heading>
        <Title>Faqs</Title>
        <p>Frequently Asked Questions</p>
        <p>Here are some common questions about the Spartans</p>
      </Heading>
      <Accordions>
        <Wrapper>
          <Accordion />
        </Wrapper>
        <Wrapper>
          <Accordion />
        </Wrapper>
        <Wrapper>
          <Accordion />
        </Wrapper>
        <Wrapper>
          <Accordion />
        </Wrapper>
      </Accordions>
    </Container>
  );
};
export default Faqs;
