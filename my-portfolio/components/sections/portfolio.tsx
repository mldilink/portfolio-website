import Image from 'next/image';

const projects = [
  {
    title: 'Portfolio 1',
    year: '2025',
    image: '/images/portfolio-1.png',
  },
  {
    title: 'Portfolio 2',
    year: '2025',
    image: '/images/portfolio-2.png',
  },
  {
    title: 'Portfolio 3',
    year: '2025',
    image: '/images/portfolio-3.png',
  },
];

export function Portfolio() {
  return (
    <section id='projects' className='bg-black px-4 py-10 md:px-30 md:py-20'>
      <div className='mx-auto flex w-full max-w-300 flex-col items-center gap-6 md:gap-12'>
        {/* Heading */}
        <div className='flex w-full max-w-88.25 flex-col items-center gap-2 text-center md:max-w-300 md:gap-4'>
          <h2 className='w-full text-[32px] font-bold leading-10.5 text-white md:text-[48px] md:leading-15'>
            Bridging Design and Development
          </h2>

          <p className='w-full text-sm leading-7 text-neutral-400 md:text-base md:leading-7.5'>
            These are real projects where I implemented frontend interfaces with
            precision and attention to detail.
          </p>
        </div>

        {/* Project Cards */}
        <div className='flex w-full flex-col gap-5 md:w-full md:max-w-289.75 md:flex-row md:items-start'>
          {projects.map((project) => (
            <article
              key={project.title}
              className='flex w-full flex-col gap-4 md:min-w-0 md:flex-1'
            >
              {/* Project Image */}
              <div className='relative aspect-square w-full overflow-hidden rounded-lg'>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes='(max-width: 767px) 100vw, 373px'
                  className='object-cover'
                />
              </div>

              {/* Project Information */}
              <div className='flex w-full flex-col gap-1'>
                <h3 className='text-lg font-semibold leading-8 text-white md:text-xl md:leading-8.5'>
                  {project.title}
                </h3>

                <p className='text-sm leading-7 text-neutral-400 md:text-base md:leading-7.5'>
                  {project.year}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
