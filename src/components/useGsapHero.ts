'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function useGsapHero(){
  const ref = useRef<HTMLElement | null>(null);

  useEffect(()=>{
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if(reduce) return; // respect user preference
    if(!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.from('.hero-line', { y: 20, opacity: 0, duration: 0.6, stagger: 0.1 });
      gsap.from('.socialButtons', { y: 10, opacity: 0, duration: 0.5, delay: 0.2 });
      gsap.from('.socialPic', { x: 200, opacity: 0, duration: 0.5, delay: 0.2 });

      //Reveal any .reveal inside sections when they enter viewport
      gsap.utils.toArray<HTMLElement>('.reveal').forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 24,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 80%' }
        });
      });
    }, ref);

    return () => ctx.revert();
  },[]);

  return ref;
}