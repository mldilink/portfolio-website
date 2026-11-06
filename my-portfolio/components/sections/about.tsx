import Image from 'next/image';

const services = [
  {
    title: 'Frontend Development',
    description:
      'I build responsive, accessible, and scalable websites using modern frontend tools and best practices.',
    icon: '/icons/close-tag.svg',
  },
  {
    title: 'Web Performance',
    description:
      'I optimize websites for speed and efficiency to ensure smooth experiences across all devices.',
    icon: '/icons/web.svg',
  },
  {
    title: 'Component Based UI',
    description:
      'I specialize in crafting reusable UI components that are clean, maintainable, and aligned with design systems.',
    icon: '/icons/component-icon.svg',
  },
  {
    title: 'Responsive Design',
    description:
      'I ensure that every layout adapts beautifully to different screen sizes — from mobile to desktop.',
    icon: '/icons/responsive-icon.svg',
  },
];

const socialLinks = [
  { name: 'Facebook', icon: '/icons/facebook.svg', href: '#' },
  { name: 'Instagram', icon: '/icons/instagram.svg', href: '#' },
  { name: 'LinkedIn', icon: '/icons/linkedin.svg', href: '#' },
  { name: 'TikTok', icon: '/icons/tiktok.svg', href: '#' },
];

export function About() {
  return (
    <section id='about' className='bg-black px-4 py-10 md:px-8 md:py-20'>
      <div className='mx-auto flex w-full max-w-300 flex-col gap-6 md:gap-12'>
        {/* Introduction */}
        <div className='flex flex-col gap-6 md:flex-row md:justify-between md:gap-8'>
          <h2 className='w-full text-[32px] font-bold leading-10.5 text-white md:max-w-189 md:text-display-xl md:leading-14'>
            I turn ideas and designs into functional, accessible, and performant
            websites{' '}
            <span className='text-brand-300'>
              using modern frontend technologies
            </span>
            .
          </h2>

          <div className='flex w-full flex-col gap-4 md:max-w-52 md:gap-29'>
            <p className='text-base leading-7.5 text-neutral-400 md:text-lg md:leading-8'>
              About Me
            </p>

            {/* Social Media */}
            <div className='flex items-center gap-4'>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className='flex size-10 shrink-0 items-center justify-center rounded-full border border-neutral-800'
                >
                  <Image
                    src={social.icon}
                    alt='Social Media Icon'
                    width={20}
                    height={20}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className='h-px w-full bg-[#22252B]' />

        {/* About Content */}
        <div className='flex flex-col gap-6 md:flex-row md:items-center md:gap-10.25'>
          {/* About Image */}
          <div className='relative aspect-361/409 w-full shrink-0 md:aspect-453/513 md:w-[37.75%]'>
            <Image
              src='/images/about-image.svg'
              alt='About me'
              fill
              className='object-cover'
            />
          </div>

          {/* Services */}
          <div className='flex w-full flex-col gap-6 md:gap-10'>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-x-12 md:gap-y-0'>
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className={`flex flex-col gap-3 md:gap-6 ${
                    index >= 2 ? 'md:mt-10' : ''
                  }`}
                >
                  <Image src={service.icon} alt='' width={40} height={40} />

                  <div className='flex flex-col gap-0.5'>
                    <h3 className='text-lg font-bold leading-8 text-white md:text-xl md:leading-8.5'>
                      {service.title}
                    </h3>

                    <p className='text-sm leading-7 text-neutral-400 md:text-base md:leading-7.5 md:tracking-[-0.03em]'>
                      {service.description}
                    </p>
                  </div>

                  {index !== services.length - 1 && (
                    <div className='h-px w-full bg-[#22252B] md:hidden' />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
