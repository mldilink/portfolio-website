import Image from 'next/image';

const testimonials = [
  {
    rating: '8X',
    title: 'More users converted after redesign',
    description:
      'Working with Edwin has been a fantastic experience. His attention to detail and commitment to quality are evident in every project. He consistently delivers results that exceed expectations, making him a valuable asset to any team.',
    name: 'Pablo Stanley',
    role: 'CEO, Company',
    image: '/images/people-1.png',
  },
  {
    rating: '3X',
    title: 'Improved user engagement and sign-ups',
    description:
      "Edwin's expertise in frontend development is remarkable. He brings creativity and innovation to the table, ensuring that every project is not only functional but also visually appealing.",
    name: 'Pablo Stanley',
    role: 'Product Manager',
    image: '/images/people-2.png',
  },
  {
    description:
      "Edwin's work ethic and dedication are truly inspiring. He approaches challenges with a positive attitude and consistently finds effective solutions.",
    name: 'Pablo Stanley',
    role: 'Project Manager',
    image: '/images/people-3.png',
  },
  {
    description:
      'Edwin has a unique ability to transform complex ideas into user-friendly designs. His contributions have significantly enhanced our projects.',
    name: 'Pablo Stanley',
    role: 'Creative Director',
    image: '/images/people-4.png',
  },
];

function StarRating() {
  return (
    <div className='flex items-center gap-0.75' aria-label='5 out of 5 stars'>
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          viewBox='0 0 24 24'
          className='size-4 md:size-6'
          fill='#F3B64C'
          aria-hidden='true'
        >
          <path d='M12 2.5L14.9 8.4L21.4 9.3L16.7 13.9L17.8 20.4L12 17.3L6.2 20.4L7.3 13.9L2.6 9.3L9.1 8.4L12 2.5Z' />
        </svg>
      ))}
    </div>
  );
}

function QuoteIcon() {
  return (
    <svg
      viewBox='0 0 48 48'
      className='size-12 shrink-0'
      fill='#22252B'
      aria-hidden='true'
    >
      <path d='M10 24.5C10 16.8 14.4 11.5 21.5 10L23 14C19.5 15.2 17.7 17.5 17.4 20H23V36H10V24.5ZM27 24.5C27 16.8 31.4 11.5 38.5 10L40 14C36.5 15.2 34.7 17.5 34.4 20H40V36H27V24.5Z' />
    </svg>
  );
}

function Author({
  image,
  name,
  role,
}: {
  image: string;
  name: string;
  role: string;
}) {
  return (
    <div className='flex min-w-0 flex-1 flex-col justify-center gap-2 md:gap-4'>
      <Image
        src={image}
        alt={name}
        width={48}
        height={48}
        className='size-12 rounded-full object-cover'
      />

      <div className='flex flex-col'>
        <p className='text-sm leading-7 font-semibold text-neutral-25 md:text-base md:leading-7.5'>
          {name}
        </p>
        <p className='text-sm leading-7 text-neutral-25 md:text-base md:leading-7.5'>
          {role}
        </p>
      </div>
    </div>
  );
}

function FeaturedTestimonial() {
  const testimonial = testimonials[0];

  return (
    <article className='flex h-121.5 flex-col justify-between gap-6 bg-[linear-gradient(154.65deg,rgba(20,155,176,0.4)_-43.71%,rgba(20,155,176,0)_79.74%)] p-5 md:h-187.75 md:gap-0 md:bg-[linear-gradient(329.18deg,rgba(20,155,176,0)_31.86%,rgba(20,155,176,0.2)_83.82%)]'>
      <div className='flex flex-col gap-2'>
        <h3 className='text-3xl leading-10 font-bold tracking-tight text-white md:text-4xl md:leading-11'>
          {testimonial.rating}
        </h3>

        <h4 className='text-lg leading-8 font-bold text-neutral-25 md:text-2xl md:leading-9'>
          {testimonial.title}
        </h4>

        <StarRating />

        <p className='text-sm leading-7 text-neutral-400 md:text-base md:leading-7.5 md:tracking-tight'>
          {testimonial.description}
        </p>
      </div>

      <div className='flex items-end gap-4 md:gap-28'>
        <Author
          image={testimonial.image}
          name={testimonial.name}
          role={testimonial.role}
        />
        <QuoteIcon />
      </div>
    </article>
  );
}

function FeaturedReview() {
  const testimonial = testimonials[1];

  return (
    <article className='flex h-107.5 flex-col justify-between gap-6 border border-[#22252B] p-5 md:h-91.75 md:gap-0'>
      <div className='flex flex-col gap-2'>
        <h3 className='text-3xl leading-10 font-bold tracking-tight text-white md:text-4xl md:leading-11'>
          {testimonial.rating}
        </h3>

        <h4 className='text-lg leading-8 font-semibold tracking-tight text-neutral-25'>
          {testimonial.title}
        </h4>

        <StarRating />

        <p className='text-sm leading-7 text-neutral-400 md:text-base md:leading-7.5 md:tracking-tight'>
          {testimonial.description}
        </p>
      </div>

      <div className='flex items-end gap-4'>
        <Author
          image={testimonial.image}
          name={testimonial.name}
          role={testimonial.role}
        />
        <QuoteIcon />
      </div>
    </article>
  );
}

function ReviewCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number];
}) {
  return (
    <article className='flex h-79 flex-col justify-between gap-6 border border-[#22252B] p-5 md:h-91'>
      <div className='flex flex-col gap-3'>
        <StarRating />

        <p className='text-sm leading-7 text-neutral-400 md:text-base md:leading-7.5 md:tracking-tight'>
          {testimonial.description}
        </p>
      </div>

      <div className='flex items-end gap-4'>
        <Author
          image={testimonial.image}
          name={testimonial.name}
          role={testimonial.role}
        />
        <QuoteIcon />
      </div>
    </article>
  );
}

export default function Testimonials() {
  return (
    <section
      id='testimonials'
      className='w-full bg-black px-4 py-10 md:px-30 md:py-20'
    >
      <div className='mx-auto flex w-full max-w-300 flex-col items-center gap-6 md:gap-12'>
        <div className='flex w-full max-w-163.75 flex-col items-center gap-2 md:gap-4'>
          <h2 className='w-full text-center text-3xl leading-10 font-bold tracking-tighter text-white md:text-5xl md:leading-15'>
            Trusted Voices
          </h2>

          <p className='w-full text-center text-sm leading-7 text-neutral-400 md:text-base md:leading-7.5 md:tracking-tight'>
            Here’s what people say about working with me — across projects,
            teams, and timelines.
          </p>
        </div>

        <div className='flex w-full flex-col gap-4 md:h-187.75 md:flex-row md:gap-5'>
          <div className='w-full md:w-112 md:shrink-0'>
            <FeaturedTestimonial />
          </div>

          <div className='flex w-full flex-col gap-4 md:w-183 md:gap-5'>
            <FeaturedReview />

            <div className='flex flex-col gap-4 md:flex-row md:gap-5'>
              <div className='min-w-0 flex-1'>
                <ReviewCard testimonial={testimonials[2]} />
              </div>

              <div className='min-w-0 flex-1'>
                <ReviewCard testimonial={testimonials[3]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
