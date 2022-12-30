import { useRef, ReactNode } from 'react';
import { useIsomorphicLayoutEffect } from '@/src/hooks/useIsomorphicLayout';
import gsap from 'gsap';
import SplitText from 'gsap/dist/SplitText';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

type SplitProps = {
  children: ReactNode;
};

const TextSplit = ({ children }: SplitProps) => {
  const root = useRef<HTMLDivElement | null>(null);
  const splitChild = useRef<SplitText>();
  const splitParent = useRef<SplitText>();

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(SplitText, ScrollTrigger);

    const cleanup = [];
    const lineReveals: Array<HTMLParagraphElement> =
      gsap.utils.toArray('#lineReveal');

    function setupReveals() {
      cleanup.forEach(obj => obj.revert());
      cleanup.length = 0;

      lineReveals.forEach(el => {
        splitChild.current = new SplitText(el, {
          type: 'lines',
          linesClass: 'split-child',
        });
        splitParent.current = new SplitText(el, {
          type: 'lines',
          linesClass: 'split-parent',
        });

        let tween = gsap.from(splitChild.current.lines, {
          scrollTrigger: {
            start: 'top 80%',
            end: 'bottom 10%',
            trigger: root.current,
            toggleActions: 'play none none reset',
          },
          yPercent: 300,
          rotate: '8deg',
          rotateX: '30deg',
          opacity: 0,
          stagger: {
            each: 0.1,
            ease: 'power2',
          },
        });
        cleanup.push(tween, splitChild.current);
      });
    }
    const ctx = gsap.context(() => {
      gsap.set('.fullScreen', { autoAlpha: 1 });
      setupReveals();
    }, root);

    function callAfterResize(func: Function, delay?: number) {
      let dc = gsap.delayedCall(delay || 0.2, func).pause(),
        handler = () => {
          gsap.set('.fullScreen', { autoAlpha: 0 });
          dc.restart(true);
        };
      window.addEventListener('resize', handler);
      return handler;
    }

    return () => {
      ctx.revert();
      callAfterResize(setupReveals);
    };
  }, []);

  return <div ref={root} style={{width: '100%'}}>{children}</div>;
};

export default TextSplit;
