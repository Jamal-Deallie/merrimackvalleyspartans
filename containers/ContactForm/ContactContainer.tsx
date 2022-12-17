import React from 'react';
import Accordion from '@/components/Accordion/Accordion';
import { Container, Heading, Accordions, Wrapper } from './styles';
import {
  Main,
  Title,
  Description,
  CodeTag,
  Subheader,
} from '../../styles/sharedstyles';
import Form from '@/components/Form/Form';
type Props = {};

const ContactForm = ({}: Props) => {
  return (
    <Container>
      <Heading>
        <h1>
          Contact <br /> Us
        </h1>
        <p>Feel Free to contact us and we will get</p>
        <p>back to you as soon as we can</p>
      </Heading>
      <Wrapper>
        <Form />
      </Wrapper>
    </Container>
  );
};
export default ContactForm;
