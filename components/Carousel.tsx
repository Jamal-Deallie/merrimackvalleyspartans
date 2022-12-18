import Head from 'next/head';
import { useEffect, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { horizontalLoop } from '@/src/helpers/horizontalLoop';
import { useIsomorphicLayoutEffect } from '@/src/hooks/useIsomorphicLayout';
const boxesArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const colors = ['#f38630', '#6fb936', '#ccc', '#6fb936'];

const Carousel = () => {
  const main = useRef<HTMLDivElement>(null);
  const loop = useRef<gsap.core.Timeline | null>(null);

  const nextBtnHandler = () => {
    loop.current.next({ duration: 0.4, ease: 'power1.inOut' });
  };
  const prevBtnHandler = () => {
    loop.current.previous({ duration: 0.4, ease: 'power1.inOut' });
  };

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(self => {
      const boxes = self.selector('.box');
      gsap.set(boxes, {
        backgroundColor: gsap.utils.wrap(colors),
      });
      loop.current = horizontalLoop(boxes, {
        paused: true,
        draggable: true,
        center: true,
      });
    }, main);
    return () => ctx.revert();
  }, []);

  return (
    <div className='app'>
      <main className='app'>
        <button className='prev' onClick={prevBtnHandler}>
          prev
        </button>
        <button className='next' onClick={nextBtnHandler}>
          next
        </button>

        <div className='wrapper' ref={main}>
          {boxesArr.map(el => (
            <div key={`box-${el}`} className='box'>
              {el}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Carousel;
