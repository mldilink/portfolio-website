import Image from 'next/image';

const skills = [
  { name: 'HTML', percentage: 100, icon: '/images/html.png' },
  { name: 'CSS', percentage: 90, icon: '/images/css.png' },
  { name: 'Javascript', percentage: 90, icon: '/images/javascript.png' },
  { name: 'Typescript', percentage: 80, icon: '/images/typescript.png' },
  { name: 'Sequelize', percentage: 80, icon: '/images/sequelize.png' },
  { name: 'Mongo DB', percentage: 75, icon: '/images/mongodb.png' },
];

export function Skills() {
  return (
    <section id='skill' className='bg-black px-4 py-10 md:px-30 md:py-20'>
      <div className='mx-auto flex w-full max-w-300 flex-col gap-6 md:flex-row md:items-start md:justify-between md:gap-8'>
        {/* Introduction */}
        <div className='flex w-full flex-col gap-6 md:min-h-132.25 md:max-w-91.75 md:justify-between'>
          <div className='flex flex-col gap-2 md:gap-4'>
            <h2 className='text-[32px] font-bold leading-10.5 text-white md:text-[48px] md:leading-15 '>
              Tools I Use to Build
            </h2>

            <p className='text-sm leading-7 text-neutral-400 md:text-base md:leading-7.5 md:tracking-[-0.03em]'>
              From code to design — here’s the tech that helps me turn ideas
              into real products.
            </p>
          </div>

          <a
            href='#contact'
            className='flex h-12 w-full items-center justify-center gap-2 bg-brand-300 p-2 text-sm font-semibold text-white md:h-14 md:text-base'
          >
            <Image src='/images/mail.svg' alt='mail' width={24} height={24} />
            Send Message
          </a>
        </div>

        {/* Skills */}
        <div className='flex w-full items-start gap-6 md:max-w-160.5'>
          {/* Vertical Indicator - Desktop */}
          <div className='relative hidden h-132.25 w-px shrink-0 bg-[#22252B] md:block'>
            <div className='absolute left-0 top-0 h-48.25 w-1 -translate-x-1/2 bg-white' />
          </div>

          {/* Skills List */}
          <div className='flex w-full flex-col gap-3.75'>
            {skills.map((skill, index) => (
              <div key={skill.name}>
                <div className='flex h-15 items-center justify-between gap-1'>
                  {/* Technology */}
                  <div className='flex shrink-0 items-center gap-0.75'>
                    <div className='flex size-15 shrink-0 items-center justify-center'>
                      <Image
                        src={skill.icon}
                        alt=''
                        width={35}
                        height={35}
                        className='max-h-11 max-w-11 object-contain'
                      />
                    </div>

                    <span className='whitespace-nowrap text-base leading-7.5 text-white md:text-xl md:leading-8.5'>
                      {skill.name}
                    </span>
                  </div>

                  {/* Percentage */}
                  <span className='text-right text-base font-bold leading-7.5 text-white md:text-xl md:leading-8.5'>
                    {skill.percentage}%
                  </span>
                </div>

                {index !== skills.length - 1 && (
                  <div className='h-px w-full bg-[#22252B]' />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
