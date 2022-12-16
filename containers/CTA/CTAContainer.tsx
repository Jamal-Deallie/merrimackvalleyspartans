import { useRef } from 'react';
import {
  Section,
  Wrap,
  Container,
  Heading,
  ButtonContainer,
  Hover,
  ButtonImage,
} from './styles';
import Link from 'next/link';
import { gsap } from 'gsap';

type Props = {};

const CTA = ({}: Props) => {
  const btnRef = useRef<HTMLDivElement>(null);
  const hoverOnEnter = () => {
    gsap.to(btnRef.current, { clipPath: 'circle(100%)' });
  };

  const hoverOnLeave = () => {
    gsap.to(btnRef.current, { clipPath: 'circle(0%)' });
  };

  return (
    <Section>
      <Heading>
        <h1>
          Sign UP
          <br /> Now
        </h1>
        <h3>
         We Don't to be average <br />We Want Be great
        </h3>
      </Heading>

      <ButtonContainer onMouseEnter={hoverOnEnter} onMouseLeave={hoverOnLeave}>
        <Hover ref={btnRef} />
        <Link href='about'>
          <ButtonImage>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 245 244.1'
              xmlSpace='preserve'>
              <path
                d='m119.3 84 36.8 38.8-36.8 38.8m-54.8-38.8h91.7'
                style={{
                  fill: 'none',
                  stroke: '#f3f3f3',
                  strokeMiterlimit: 10,
                  strokeWidth: 2
                }}
              />
            </svg>
          </ButtonImage>
        </Link>
      </ButtonContainer>
    </Section>
  );
};

export default CTA;
