import Head from 'next/head';
import { Suspense } from 'react';
import Video from '@/components/Video';
import Hero from '@/containers/HeroContainer';
import Mission from '@/containers/MissionContainer';
import Quote from '@/containers/QuoteContainer';
import Faqs from '@/containers/FaqsContainer';
import CTA from '@/containers/CTAContainer';
import Carousel from '@/components/Carousel';

export default function Home() {
  return (
    <>
      <Head>
        <title>Merrimack Valley Spartans</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero />
      <Mission />
      <Carousel />
      <Quote />
      <div className='gradient'>
        <Faqs />
        <CTA />
      </div>
    </>
  );
}
