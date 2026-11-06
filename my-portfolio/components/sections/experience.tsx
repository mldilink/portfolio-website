'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';

const experiences = [
  {
    title: 'Frontend Developer',
    duration: '2025 - Present',
    description:
      'Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.',
    company: 'Company 1',
    logo: '/images/company-1.svg',
  },
  {
    title: 'Web Developer',
    duration: '2024 - 2025',
    description:
      'Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.',
    company: 'Company 2',
    logo: '/images/company-2.svg',
  },
  {
    title: 'Frontend Intern',
    duration: '2024',
    description:
      'Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.',
    company: 'Company 3',
    logo: '/images/company-3.svg',
  },
];

export function Experience() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [progress, setProgress] = useState(0);

  const updateSliderState = useCallback(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    const maxScroll = slider.scrollWidth - slider.clientWidth;
    const currentScroll = slider.scrollLeft;

    setCanScrollPrev(currentScroll > 1);
    setCanScrollNext(currentScroll < maxScroll - 1);

    setProgress(maxScroll > 0 ? Math.min(currentScroll / maxScroll, 1) : 0);
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    updateSliderState();

    slider.addEventListener('scroll', updateSliderState, {
      passive: true,
    });

    window.addEventListener('resize', updateSliderState);

    return () => {
      slider.removeEventListener('scroll', updateSliderState);
      window.removeEventListener('resize', updateSliderState);
    };
  }, [updateSliderState]);

  const scrollSlider = (direction: 'prev' | 'next') => {
    const slider = sliderRef.current;
    const card = slider?.firstElementChild as HTMLElement | null;

    if (!slider || !card) return;

    const distance = card.offsetWidth + 20;

    slider.scrollBy({
      left: direction === 'next' ? distance : -distance,
      behavior: 'smooth',
    });
  };

  return (
    <section className='bg-black px-4 py-10 md:px-30 md:py-20'>
      <div className='mx-auto flex w-full max-w-300 flex-col gap-6 md:gap-12'>
        {/* Heading */}
        <div className='flex w-full flex-col gap-2 md:gap-4'>
          <h2 className='text-[32px] font-bold leading-10.5 text-white md:text-[48px] md:leading-15 '>
            My Journey in Tech
          </h2>

          <p className='text-sm leading-7 text-neutral-400 md:text-base md:leading-7.5 md:tracking-[-0.03em]'>
            From small gigs to real-world challenges — each experience helped me
            grow as a builder and problem-solver.
          </p>
        </div>

        {/* Experience Cards */}
        <div className='flex w-full flex-col gap-4 md:gap-12'>
          <div
            ref={sliderRef}
            className='flex w-full snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth scrollbar-none [&::-webkit-scrollbar]:hidden'
          >
            {experiences.map((experience) => (
              <article
                key={experience.company}
                className='relative flex h-92.5 w-full shrink-0 snap-start flex-col gap-5 border border-[#22252B] p-4 md:h-84 md:w-141 md:p-5'
              >
                {/* Accent */}
                <div className='absolute left-0 top-6 h-17 w-0.75 bg-brand-300' />

                {/* Job Header */}
                <div className='flex h-15.5 w-full shrink-0 items-center justify-between md:h-17'>
                  <div className='flex min-w-0 flex-col gap-1'>
                    <h3 className='text-base font-bold leading-7.5 text-neutral-25 md:text-xl md:leading-8.5 '>
                      {experience.title}
                    </h3>

                    <p className='text-sm leading-7 text-neutral-25 md:text-base md:leading-7.5 '>
                      {experience.duration}
                    </p>
                  </div>

                  {/* Work Icon */}
                  <Image
                    src='/icons/work-icon.svg'
                    alt='Work'
                    width={24}
                    height={24}
                  />
                </div>

                {/* Divider */}
                <div className='h-px w-full shrink-0 bg-[#22252B]' />

                {/* Description */}
                <p className='h-42 w-full text-sm leading-7 text-neutral-400 md:h-30 md:text-base md:leading-7.5'>
                  {experience.description}
                </p>

                {/* Company Logo */}
                <div className='relative h-12 w-32 shrink-0'>
                  <Image
                    src={experience.logo}
                    alt={`${experience.company} logo`}
                    fill
                    sizes='128px'
                    className='object-contain object-left'
                  />
                </div>
              </article>
            ))}
          </div>

          {/* Navigation */}
          <div className='flex w-full flex-col gap-4'>
            {/* Progress Line */}

            <div className='relative h-px w-full bg-[#22252B]'>
              <div
                className='absolute top-1/2 h-1 w-[45.75%] -translate-y-1/2 bg-white transition-[left] duration-300 ease-out'
                style={{
                  left: `${progress * (100 - 45.75)}%`,
                }}
              />
            </div>

            {/* Navigation Buttons */}
            {/* Navigation Buttons */}
            <div className='flex items-center gap-3'>
              <button
                type='button'
                onClick={() => scrollSlider('prev')}
                disabled={!canScrollPrev}
                className={`flex h-10 w-29.5 items-center justify-center border border-[#22252B] p-2 text-sm font-semibold transition-colors md:h-12 md:text-base md:leading-7.5 md:tracking-[-0.03em] ${
                  canScrollPrev
                    ? 'text-neutral-25'
                    : 'cursor-not-allowed text-neutral-800'
                }`}
              >
                Prev
              </button>

              <button
                type='button'
                onClick={() => scrollSlider('next')}
                disabled={!canScrollNext}
                className={`flex h-10 w-29.5 items-center justify-center border border-[#22252B] p-2 text-sm font-semibold transition-colors md:h-12 md:text-base md:leading-7.5 md:tracking-[-0.03em] ${
                  canScrollNext
                    ? 'text-neutral-25'
                    : 'cursor-not-allowed text-neutral-800'
                }`}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
