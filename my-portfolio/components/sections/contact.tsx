import Image from 'next/image';

const socialLinks = [
  {
    label: 'GitHub',
    href: '#',
    icon: '/icons/facebook.svg',
  },
  {
    label: 'Instagram',
    href: '#',
    icon: '/icons/instagram.svg',
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: '/icons/linkedin.svg',
  },
  { label: 'TikTok', href: '#', icon: '/icons/tiktok.svg' },
];

const contactDetails = [
  {
    title: 'Address',
    value: 'Jakarta, Indonesia',
  },
  {
    title: 'Contact',
    value: '(+62) 1234567890',
  },
];

export default function Contact() {
  return (
    <section
      id='contact'
      className='relative isolate overflow-hidden bg-black px-5 py-10 md:px-30 md:pt-20 md:pb-30'
      style={{
        backgroundImage:
          'linear-gradient(180deg, rgba(27, 178, 201, 0) 32.79%, #1BB2C9 139.81%)',
      }}
    >
      {/* Background glass grid */}
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-x-0 top-105 -z-10 h-168 md:top-61 md:h-189'
        style={{
          backgroundImage: `
            linear-gradient(180deg, #000000 -15.44%, rgba(0, 0, 0, 0) 104.67%),
            repeating-linear-gradient(
              90deg,
              rgba(22, 22, 24, 0.4) 0,
              rgba(22, 22, 24, 0.4) 1px,
              rgba(255, 255, 255, 0.025) 1px,
              rgba(255, 255, 255, 0.025) 68px
            )
          `,
          backdropFilter: 'blur(44px)',
        }}
      />

      <div className='mx-auto flex w-full max-w-300 flex-col gap-6 md:flex-row md:items-start md:gap-10'>
        {/* Contact form */}
        <div className='flex w-full flex-col gap-6 border border-[#22252B] bg-black p-4 md:flex-1 md:gap-8 md:px-6 md:py-10'>
          <div className='flex flex-col gap-2 md:gap-4'>
            <h2 className='text-[32px] leading-10.5 font-bold text-white md:text-5xl md:leading-15'>
              Let’s <span className='text-brand-300'>Build Something</span>{' '}
              Great
            </h2>

            <p className='text-sm leading-7 text-neutral-400 md:text-base md:leading-7.5'>
              Got an idea, a project, or just want to connect? I’m always open
              to new conversations.
            </p>
          </div>

          <form
            action='mailto:your-email@example.com'
            method='post'
            encType='text/plain'
            className='flex flex-col gap-4 md:gap-5'
          >
            <div className='flex flex-col gap-1.5'>
              <label
                htmlFor='contact-name'
                className='text-sm leading-7 text-neutral-25'
              >
                Name
              </label>
              <input
                id='contact-name'
                name='Name'
                type='text'
                placeholder='Enter your name'
                required
                className='h-12 w-full border border-[#22252B] bg-transparent px-4 text-base font-medium text-white outline-none placeholder:text-neutral-600 focus:border-brand-300'
              />
            </div>

            <div className='flex flex-col gap-1.5'>
              <label
                htmlFor='contact-email'
                className='text-sm leading-7 text-neutral-25'
              >
                Email
              </label>
              <input
                id='contact-email'
                name='Email'
                type='email'
                placeholder='Enter your email'
                required
                className='h-12 w-full border border-[#22252B] bg-transparent px-4 text-base font-medium text-white outline-none placeholder:text-neutral-600 focus:border-brand-300'
              />
            </div>

            <div className='flex flex-col gap-1.5'>
              <label
                htmlFor='contact-message'
                className='text-sm leading-7 text-neutral-25'
              >
                Message
              </label>
              <textarea
                id='contact-message'
                name='Message'
                placeholder='Write your message'
                required
                className='min-h-34 w-full resize-y border border-[#22252B] bg-transparent px-4 py-2 text-base font-medium text-white outline-none placeholder:text-neutral-600 focus:border-brand-300'
              />
            </div>

            <button
              type='submit'
              className='flex h-12 w-full items-center justify-center gap-2 bg-white px-2 text-sm font-semibold text-neutral-950 transition-colors hover:bg-neutral-text-neutral-25 md:h-14 md:text-base'
            >
              <span
                className='size-6 bg-black'
                style={{
                  mask: "url('/images/mail.svg') center / contain no-repeat",
                  WebkitMask:
                    "url('/images/mail.svg') center / contain no-repeat",
                }}
              />
              Send Message
            </button>
          </form>
        </div>

        {/* Contact information */}
        <div className='flex w-full flex-col gap-6 md:flex-1 md:self-stretch'>
          <div className='flex flex-1 flex-col gap-4 md:gap-5'>
            {contactDetails.map((item, index) => (
              <div key={item.title} className='flex flex-col gap-4'>
                <div className='flex flex-col gap-0.5 md:gap-3'>
                  <h3 className='text-base leading-7.5 font-boldtext-neutral-25 md:text-xl md:font-semibold'>
                    {item.title}
                  </h3>
                  <p className='text-sm leading-7 text-neutral-400 md:text-base md:leading-7.5'>
                    {item.value}
                  </p>
                </div>

                {index === 0 && (
                  <div className='h-px w-full bg-white/10 md:bg-[#22252B]' />
                )}
                {index === 1 && (
                  <div className='h-px w-full bg-white/10 md:bg-[#22252B]' />
                )}
              </div>
            ))}

            <div className='flex flex-col gap-4 md:gap-5'>
              <h3 className='text-base leading-7.5 font-bold text-neutral-25 md:text-xl md:font-semibold'>
                Social Media
              </h3>

              <div className='flex items-center gap-3'>
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={social.label}
                    className='flex size-10 items-center justify-center rounded-full border border-white/10 text-sm font-semibold text-neutral-25 transition-colors hover:border-brand-300 hover:text-brand-border-brand-300 md:border-neutral-800'
                  >
                    <Image
                      src={social.icon}
                      alt={social.label}
                      width={20}
                      height={20}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <h2 className='text-[40px] leading-14 font-bold text-white md:text-[56px] md:leading-17'>
            GET IN TOUCH
          </h2>
        </div>
      </div>
    </section>
  );
}
