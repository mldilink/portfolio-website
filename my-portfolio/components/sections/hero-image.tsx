import Image from 'next/image';

export function HeroImage() {
  return (
    <div className='relative mx-auto aspect-252/496 w-[clamp(15.75rem,23.68vw,21.31rem)] shrink-0 md:mx-0'>
      {/* Background Image */}
      <Image
        src='/images/hero-background.svg'
        alt=''
        fill
        priority
        className='object-cover'
      />

      {/* Teal Vector */}
      <div className='absolute left-[4.69%] top-[57.38%] h-[16.39%] w-[95.31%]'>
        <Image src='/images/hero-vector.svg' alt='vector' fill />
      </div>

      {/* Portrait */}
      <div className='absolute left-1/2 top-[38.83%] h-[61.17%] w-full -translate-x-1/2 overflow-hidden rounded-b-[14px] md:rounded-b-[19px]'>
        <Image
          src='/images/hero-portrait.svg'
          alt='Portrait'
          fill
          className='object-cover'
        />
      </div>
    </div>
  );
}
