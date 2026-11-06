import Image from 'next/image';
import { HeroImage } from './hero-image';

export function Hero() {
  return (
    <section id='home' className='relative min-h-screen overflow-hidden'>
      {/* Background Gradient */}
      <div
        aria-hidden='true'
        className='pointer-events-none absolute -left-261.75 -top-125.25 h-307.5 w-[1845px] rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(20,155,176,0.8)_0%,rgba(20,155,176,0)_100%)] opacity-80'
      />

      <div
        aria-hidden='true'
        className='pointer-events-none absolute -left-19 -top-146 h-307.5 w-[1845px] opacity-70'
      />

      {/* Grid Decoration */}
      <div
        aria-hidden='true'
        className='pointer-events-none absolute -left-76 -top-16 h-125.75 w-272.25 mix-blend-normal'
      >
        {/* Vector 1 */}
        <Image
          src='/images/vector-1.svg'
          alt='Vector 1'
          width={1074}
          height={488}
          className='absolute -left-1.75 -top-1.75 mix-blend-soft-light'
        />

        {/* Vector 2 */}
        <Image
          src='/images/vector-2.svg'
          alt=''
          width={1089}
          height={503}
          className='absolute inset-0 mix-blend-soft-light'
        />
      </div>

      <div className='relative mx-auto flex w-full max-w-290 flex-col items-center gap-6 px-4 pb-16 md:flex-row md:items-start md:justify-between md:gap-6 md:px-20 xl:px-0 md:pb-0'>
        {/* Hero Image */}
        <div className='order-1 md:order-2'>
          <HeroImage />
        </div>

        {/* Hero Content */}
        <div className='order-2 flex w-full flex-col items-start gap-8 md:mt-56.75 md:max-w-[clamp(22.56rem,47.5vw,42.75rem)] md:gap-15.5 md:order-1'>
          {/* Introduction */}
          <div className='flex w-full flex-col items-start gap-4 md:gap-8'>
            <p className='text-base leading-7.5 tracking-[-0.03em] text-neutral-25 md:text-xl md:leading-8.5'>
              Hi. I’m Edwin Anderson
            </p>

            {/* Heading */}
            <h1 className='flex flex-col text-[clamp(3.5rem,6.67vw,6rem)] font-bold leading-17 tracking-[-0.06em] text-white xl:gap-7'>
              <span>
                FRONT{' '}
                <span className='font-(family-name:--font-charm) font-normal'>
                  END
                </span>
              </span>
              <span>DEVELOPER</span>
            </h1>

            {/* Description */}
            <p className='w-full text-sm leading-7 text-neutral-400 md:text-lg md:leading-8 md:tracking-[-0.03em]'>
              Passionate about frontend development, I focus on crafting digital
              products that are visually polished, performance-optimized, and
              deliver a consistent experience across all platforms.
            </p>
          </div>

          {/* Contact Button */}
          <a
            href='#contact'
            className='flex h-12 w-full items-center justify-center gap-2 bg-brand-300 p-2 text-sm font-semibold text-white md:h-14 md:w-71.75 md:text-base'
          >
            <Image src='/images/mail.svg' alt='mail' width={24} height={24} />
            Hire Me
          </a>
        </div>
      </div>
    </section>
  );
}
