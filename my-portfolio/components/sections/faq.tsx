'use client';

import Image from 'next/image';
import { useState } from 'react';

const faqs = [
  {
    question: 'Do you work on freelance or remote projects?',
    answer:
      'I mainly work with HTML, CSS, JavaScript, and frameworks like React, Next.js, and Vue. I also have experience using Tailwind CSS, TypeScript, and working with APIs.',
  },
  {
    question: 'What technologies do you work with?',
    answer:
      'I mainly work with HTML, CSS, JavaScript, and frameworks like React, Next.js, and Vue. I also have experience using Tailwind CSS, TypeScript, and working with APIs.',
  },
  {
    question: 'Can you convert Figma or Sketch designs into code?',
    answer:
      'I mainly work with HTML, CSS, JavaScript, and frameworks like React, Next.js, and Vue. I also have experience using Tailwind CSS, TypeScript, and working with APIs.',
  },
  {
    question: 'Do you collaborate with backend developers or teams?',
    answer:
      'I mainly work with HTML, CSS, JavaScript, and frameworks like React, Next.js, and Vue. I also have experience using Tailwind CSS, TypeScript, and working with APIs.',
  },
  {
    question: 'Are you available for full-time roles?',
    answer:
      'I mainly work with HTML, CSS, JavaScript, and frameworks like React, Next.js, and Vue. I also have experience using Tailwind CSS, TypeScript, and working with APIs.',
  },
];

function MessageIcon() {
  return (
    <Image src='/icons/message-icon.svg' alt='Message' width={40} height={40} />
  );
}

function ProfileImage() {
  return (
    <div className='relative size-20 shrink-0 overflow-hidden rounded-full bg-brand-300'>
      <Image
        src='/images/faq-profile.png'
        alt='Profile'
        width={75}
        height={90}
        className='absolute bottom-0 left-1/2 h-auto w-18 -translate-x-1/2 object-contain'
      />
    </div>
  );
}

function FaqCard({
  question,
  answer,
  active,
  onClick,
}: {
  question: string;
  answer: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type='button'
      onClick={onClick}
      aria-pressed={active}
      className={`flex h-89 w-full shrink-0 snap-start flex-col justify-between border p-4 text-left transition-colors duration-300 md:h-116.5 md:p-5 ${
        active
          ? 'border-[#22252B] bg-brand-700 md:w-94.75'
          : 'border-[#22252B] bg-transparent md:w-63'
      }`}
    >
      {active ? (
        <>
          <div className='flex w-full items-start justify-between gap-4'>
            <ProfileImage />
            <MessageIcon />
          </div>

          <div className='flex flex-col gap-2.5 md:gap-3'>
            <h3 className='text-2xl leading-9 font-semibold tracking-tight text-neutral-25 md:text-3xl md:leading-9.5'>
              {question}
            </h3>

            <p className='text-sm leading-7 font-medium text-neutral-25 md:text-base md:leading-7.5 md:tracking-tight'>
              {answer}
            </p>
          </div>
        </>
      ) : (
        <>
          <div className='flex w-full justify-center'>
            <MessageIcon />
          </div>

          <h3 className='text-2xl leading-9 font-semibold tracking-tight text-neutral-25 md:text-3xl md:leading-9.5'>
            {question}
          </h3>
        </>
      )}
    </button>
  );
}

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(1);

  const previous = () => {
    setActiveIndex((current) => Math.max(current - 1, 0));
  };

  const next = () => {
    setActiveIndex((current) => Math.min(current + 1, faqs.length - 1));
  };

  return (
    <section id='faq' className='w-full px-5 py-10 md:px-30 md:py-20'>
      <div className='mx-auto flex w-full max-w-300 flex-col gap-6 md:gap-12'>
        <div className='flex flex-col gap-6 md:flex-row md:items-center md:justify-between'>
          <div className='flex flex-col gap-2 md:w-133.5 md:gap-4'>
            <h2 className='text-3xl leading-10 font-bold tracking-tighter text-white md:text-5xl md:leading-15'>
              Still Got Questions?
            </h2>

            <p className='text-sm leading-7 text-neutral-400 md:text-base md:leading-7.5 md:tracking-tight'>
              I’ve listed answers to questions I often get as a frontend
              developer.
            </p>
          </div>

          <div className='flex h-10 w-62 items-center gap-3 md:h-12'>
            <button
              type='button'
              onClick={previous}
              disabled={activeIndex === 0}
              className={`flex h-full w-29.5 items-center justify-center border border-[#22252B] p-2 text-sm font-semibold md:text-base ${
                activeIndex === 0
                  ? 'cursor-not-allowed text-neutral-800'
                  : 'text-neutral-25'
              }`}
            >
              Prev
            </button>

            <button
              type='button'
              onClick={next}
              disabled={activeIndex === faqs.length - 1}
              className={`flex h-full w-29.5 items-center justify-center border border-[#22252B] p-2 text-sm font-semibold md:text-base ${
                activeIndex === faqs.length - 1
                  ? 'cursor-not-allowed text-neutral-800'
                  : 'text-neutral-25'
              }`}
            >
              Next
            </button>
          </div>
        </div>

        <div className='hidden w-full snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2 md:flex md:items-center'>
          {faqs.map((faq, index) => (
            <FaqCard
              key={index}
              question={faq.question}
              answer={faq.answer}
              active={activeIndex === index}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>

        <div className='w-full md:hidden'>
          <FaqCard
            question={faqs[activeIndex].question}
            answer={faqs[activeIndex].answer}
            active
            onClick={() => {}}
          />
        </div>
      </div>
    </section>
  );
}
