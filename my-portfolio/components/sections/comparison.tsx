import Image from 'next/image';

const comparisonItems = [
  'React Expert',
  'Pixel Perfect',
  'TypeScript Proficiency',
  'Clean, Maintainable Code',
  'Performance Optimization',
  'Responsive Website',
  'UI Design Proficiency (Figma)',
];

const columns = {
  first: 'Skill',
  second: 'With Me',
  third: 'Other',
};

export function Comparison() {
  return (
    <section className='relative isolate overflow-hidden bg-black px-4 py-10 md:px-30 md:py-20'>
      {/* Background decoration */}
      <div className='pointer-events-none absolute inset-0 -z-10 overflow-hidden'>
        <div className='absolute -left-261.75 top-6.75 h-307.5 w-[1845px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(20,155,176,0.8)_0%,transparent_70%)] opacity-80' />

        <div className='absolute -left-19 top-28 h-307.5 w-[1845px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(20,155,176,0.15)_0%,transparent_70%)] opacity-70' />

        {/* Grid Decoration */}
        <div
          aria-hidden='true'
          className='pointer-events-none absolute -bottom-16 -left-76 h-125.75 w-272.25 mix-blend-normal'
        >
          {/* Vector 1 */}
          <Image
            src='/images/vector-1.svg'
            alt=''
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
      </div>

      <div className='mx-auto flex w-full max-w-300 flex-col items-center gap-6 md:gap-12'>
        {/* Heading */}
        <div className='flex w-full flex-col items-center gap-2 text-center md:gap-4'>
          <h2 className='w-full text-[32px] font-bold leading-10.5 text-white md:text-[48px] md:leading-15'>
            Not Your Typical Frontend Developer
          </h2>

          <p className='w-full text-sm leading-7 text-neutral-400 md:text-base md:leading-7.5'>
            I care about how it looks, how it works, and how it feels — all at
            once
          </p>
        </div>

        {/* Comparison table */}
        <div className='box-border flex h-150 w-full items-center border border-[#22252B] bg-black p-3 md:h-156 md:p-6'>
          {/* Skill column */}
          <div className='flex h-full min-w-0 flex-1 flex-col'>
            <div className='flex h-18 shrink-0 items-center border-b border-[#22252B] px-3 py-1 md:px-6 md:py-2'>
              <span className='text-base font-semibold leading-7.5 text-neutral-25 md:text-2xl md:leading-9'>
                {columns.first}
              </span>
            </div>

            {comparisonItems.map((item, index) => (
              <div
                key={item}
                className={`flex h-18 shrink-0 items-center border-b px-3 py-1 md:px-6 md:py-2 ${
                  index === comparisonItems.length - 1
                    ? 'border-transparent'
                    : 'border-[#22252B]'
                }`}
              >
                <span className='text-sm leading-7 text-neutral-25 md:text-lg md:leading-8 md:-[-0.03em]'>
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* With Me column */}
          <div className='flex h-full w-16.5 shrink-0 flex-col bg-brand-700 md:w-auto md:flex-1'>
            <div className='flex h-18 shrink-0 items-center border-b border-white/40 px-3 py-2 md:px-6'>
              <span className='text-sm font-semibold leading-7 text-neutral-25 md:text-2xl md:leading-9 md:-[-0.04em]'>
                {columns.second}
              </span>
            </div>

            {comparisonItems.map((item, index) => (
              <div
                key={item}
                className={`flex h-18 shrink-0 items-center border-b border-white/40 px-3 md:px-6 ${
                  index === comparisonItems.length - 1
                    ? 'border-transparent'
                    : ''
                }`}
              >
                <svg
                  viewBox='0 0 24 24'
                  fill='none'
                  className='size-4 shrink-0 md:size-5'
                  aria-label='Available'
                >
                  <circle cx='12' cy='12' r='11' fill='white' />
                  <path
                    d='M7 12.5L10.5 16L17 9'
                    stroke='#075864'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
            ))}
          </div>

          {/* Other column */}
          <div className='flex h-full w-16.5 shrink-0 flex-col bg-black md:flex-1'>
            <div className='flex h-18 shrink-0 items-center border-b border-[#22252B] px-3 py-2 md:px-6'>
              <span className='text-sm font-semibold leading-7 text-neutral-25 md:text-2xl md:leading-9 md:-[-0.04em]'>
                {columns.third}
              </span>
            </div>

            {comparisonItems.map((item, index) => (
              <div
                key={item}
                className={`flex h-18 shrink-0 items-center border-b border-[#22252B] px-3 md:px-6 ${
                  index === comparisonItems.length - 1
                    ? 'border-transparent'
                    : ''
                }`}
              >
                <svg
                  viewBox='0 0 24 24'
                  fill='none'
                  className='size-4 shrink-0 md:size-5'
                  aria-label='Unavailable'
                >
                  <circle cx='12' cy='12' r='11' fill='#414651' />
                  <path
                    d='M9 9L15 15M15 9L9 15'
                    stroke='#0A0D12'
                    strokeWidth='2'
                    strokeLinecap='round'
                  />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
