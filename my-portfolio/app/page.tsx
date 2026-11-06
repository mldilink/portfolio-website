import { Navbar } from '@/components/layout/navbar';
import { About } from '@/components/sections/about';
import { Comparison } from '@/components/sections/comparison';
import Contact from '@/components/sections/contact';
import { Experience } from '@/components/sections/experience';
import FAQ from '@/components/sections/faq';
import { Hero } from '@/components/sections/hero';
import { Portfolio } from '@/components/sections/portfolio';
import { Expertise } from '@/components/sections/service';
import { Skills } from '@/components/sections/skills';
import Testimonials from '@/components/sections/testimonials';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Expertise />
      <About />
      <Skills />
      <Comparison />
      <Portfolio />
      <Experience />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  );
}
