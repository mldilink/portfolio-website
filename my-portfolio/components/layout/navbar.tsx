'use client';

import { useState } from 'react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skill', href: '#skill' },
  { label: 'Projects', href: '#projects' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleMenuToggle = () => {
    if (isOpen) {
      setIsClosing(true);

      setTimeout(() => {
        setIsOpen(false);
        setIsClosing(false);
      }, 500);

      return;
    }

    setIsOpen(true);
  };

  return (
    <header className='absolute left-4 right-4 top-4 z-50 mx-auto md:left-1/2 md:right-auto md:top-8 md:w-fit md:-translate-x-1/2'>
      <nav
        className={`relative flex items-center justify-between overflow-hidden md:gap-6 md:bg-black/20 md:px-6 ${
          isOpen
            ? 'w-full items-start rounded-2xl bg-black/40 backdrop-blur-lg p-4'
            : 'h-12 w-full rounded-full bg-black/40 px-4'
        } ${
          isClosing
            ? 'animate-[navbar-close_500ms_ease-in-out_forwards]'
            : isOpen
              ? 'animate-[navbar-open_500ms_ease-in-out_forwards]'
              : ''
        } md:h-12 md:w-fit md:items-center md:rounded-full`}
      >
        {/* Logo */}
        <a href='#home' className='text-xl font-bold text-white md:w-15'>
          Edwin
        </a>

        {/* Desktop Navigation */}
        <ul className='hidden items-center gap-6 md:flex'>
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className='flex items-center justify-center px-2 py-2 text-base font-normal tracking-tight text-white transition-opacity hover:opacity-70'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          type='button'
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          onClick={handleMenuToggle}
          className='flex size-6 items-center justify-center text-white md:hidden'
        >
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            aria-hidden='true'
          >
            {isOpen ? (
              <path d='M18 6L6 18M6 6l12 12' />
            ) : (
              <path d='M3 6h18M3 12h18M3 18h18' />
            )}
          </svg>
        </button>

        {/* Mobile Navigation Links */}
        {isOpen && (
          <ul
            className={`absolute left-0 right-0 top-12 flex flex-col px-4 pt-4 transition-opacity duration-200 ${
              isClosing ? 'pointer-events-none opacity-0' : 'opacity-100'
            } md:hidden`}
          >
            {navItems.map((item) => (
              <li key={item.href} className='h-11.5'>
                <a
                  href={item.href}
                  onClick={handleMenuToggle}
                  className='flex h-full items-center py-2 text-base font-normal tracking-[-0.03em] text-white'
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
