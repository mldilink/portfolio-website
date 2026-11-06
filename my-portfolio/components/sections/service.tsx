import Image from 'next/image';

const expertiseItems = [
  'App Development',
  'Website Development',
  'Pixel Perfect',
  'React Expert',
];

function ExpertiseItems() {
  return (
    <div className='flex w-max shrink-0 items-center gap-3.5 pr-3.5'>
      {expertiseItems.map((item) => (
        <div key={item} className='flex shrink-0 items-center gap-3.5'>
          <span className='whitespace-nowrap text-xl font-bold text-white md:text-[40px]'>
            {item}
          </span>

          <Image
            src='/images/expertise-icon.svg'
            alt=''
            width={60}
            height={60}
            className='size-9.5 shrink-0 md:size-15'
          />
        </div>
      ))}
    </div>
  );
}

export function Expertise() {
  return (
    <section
      aria-label='Areas of expertise'
      className='overflow-hidden bg-brand-300 py-3 md:py-6'
    >
      <div className='expertise-marquee flex w-max'>
        <ExpertiseItems />
        <div aria-hidden='true'>
          <ExpertiseItems />
        </div>
      </div>
    </section>
  );
}
