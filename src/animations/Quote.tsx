import { useRef, ReactNode } from 'react';
import { useIsomorphicLayoutEffect } from '@/src/hooks/useIsomorphicLayout';
import gsap from 'gsap';
import SplitText from 'gsap/dist/SplitText';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

type QuoteProps = {
  children: ReactNode;
};

const QuoteTL = ({ children }: QuoteProps) => {
  const root = useRef<HTMLDivElement | null>(null);
  const tl = useRef<gsap.core.Timeline>();

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          start: 'top center',
          end: 'bottom bottom',
          trigger: root.current,
          toggleActions: 'play none none reset',
          immediateRender: true,
          markers: true,
        },
      });

      tl.current
        .fromTo('#football', { xPercent: 100 }, { xPercent: -10, duration: 4 })
        .fromTo(
          '#outer',
          { clipPath: 'inset(50% 0 50% 0)' },
          { clipPath: 'inset(0% 0 0% 0)', duration: 0.75 }
        )
        .fromTo(
          '#box',
          { autoAlpha: 0 },
          { autoAlpha: 1, ease: 'sine.out' },
          '<0.25'
        );
    }, root);

    return () => {
      ctx.revert();
    };
  }, []);

  return <div ref={root}>{children}</div>;
};

export default QuoteTL;
