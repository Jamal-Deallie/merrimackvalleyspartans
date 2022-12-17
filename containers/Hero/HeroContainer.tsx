import { useRef } from 'react';
import {
  Main,
  Description,
  CodeTag,
  Line,
  Subheader,
} from '../../styles/sharedstyles';
import Video from '@/components/Video/Video';
import { Suspense } from 'react';
import {
  Section,
  Heading,
  VideoContainer,
  OuterContainer,
  Title,
  Button,
} from './styles';
import { useIsomorphicLayoutEffect } from '@/src/hooks/useIsomorphicLayout';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitText from 'gsap/dist/SplitText';

const Hero = () => {
  const component = useRef<HTMLDivElement>(null);
  const root = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    let ctx = gsap.context(() => {
      tl.current = gsap.timeline();

      tl.current
        .fromTo(
          '#heading',
          //   { y: 80, opacity: 0 },
          { x: '110%', opacity: 0 },
          {
            opacity: 1,
            x: '0%',

            duration: 1,
            ease: 'power3.out',
          }
        )
        .fromTo(
          '#subheader',
          //   { y: 80, opacity: 0 },
          { x: '-110%', opacity: 0 },
          {
            opacity: 1,
            x: '0%',

            duration: 1,
            ease: 'power3.out',
          }
        ),
        '.5';
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <Section ref={root}>
      <OuterContainer>
        <Heading>
          <div>
            <Subheader id='subheader'>Merrimack Valley</Subheader>
          </div>
          <div>
            <Title id='heading'>SPARTANS</Title>
          </div>
          <div>
            <p>
              We don't want you to be average
              <br />
              We want you to be great
            </p>
          </div>
          <Button>
            {/* {isSubmitting ? <span>Submitting...</span> : <span>Submit</span>} */}
            Sign Up
          </Button>
        </Heading>
        <VideoContainer>
          <Suspense fallback={<div>Loading...</div>}>
            <div id='video'>
              <Video mpegSrc={'/videos/valley_vid.mp4'} />
            </div>
          </Suspense>
        </VideoContainer>
      </OuterContainer>
    </Section>
  );
};

export default Hero;
