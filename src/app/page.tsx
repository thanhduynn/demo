'use client';
import { Poppins } from 'next/font/google';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { Play, ChevronDown } from 'lucide-react';
import { useRef } from 'react';

const Slideshow = dynamic(() => import('~/components/SlideShow/SlideShow'));
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700', '900'] });

const brandUrl = '/images/unilever.png';

export default function Home() {
  const featuredWorkRef = useRef(null);
  const brandsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref: any) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-foreground text-white">
      {/* Hero Section */}
      <section className="relative h-screen">
        <Image
          src="/images/vietnam-hero.jpg"
          alt="Vietnam Production Service"
          layout="fill"
          objectFit="cover"
          className="opacity-40"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-b from-current/40 to-current/70" />

        <div className="relative h-full flex flex-col items-center justify-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`${poppins.className} text-4xl md:text-6xl lg:text-7xl font-bold text-center max-w-5xl leading-tight`}
          >
            Crafting Visual Stories in
            <span className="text-stroke text-transparent"> Vietnam</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-center max-w-2xl text-gray-300"
          >
            World-class production services bringing your cinematic vision to life
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full hover:bg-gray-200 transition-colors"
          >
            <Play size={20} />
            Watch Showreel
          </motion.button>

          <motion.button
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-8 hover:text-white/90 transition-colors cursor-pointer"
            onClick={() => scrollToSection(featuredWorkRef)}
          >
            <ChevronDown size={32} className="text-white/70" />
          </motion.button>
        </div>
      </section>

      {/* Featured Work Carousel */}
      <section ref={featuredWorkRef} className="relative py-20 bg-black">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-2 text-center"
        >
          <h2 className={`${poppins.className} text-3xl md:text-4xl font-bold`}>
            Trusted by Global Brands
          </h2>
          <div className="h-1 w-20 bg-white mx-auto" />
        </motion.div>
        <Slideshow />
        <motion.button
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hover:text-white/90 transition-colors cursor-pointer"
          onClick={() => scrollToSection(brandsRef)}
        >
          <ChevronDown size={32} className="text-white/70" />
        </motion.button>
      </section>

      {/* Brands Section */}
      <section ref={brandsRef} className="relative px-4 md:px-8 lg:px-16 py-20 /20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className={`${poppins.className} text-3xl md:text-4xl font-bold`}>
            Trusted by Global Brands
          </h2>
          <div className="h-1 w-20 bg-white mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-gray-700">
          {Array.from({ length: 16 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="aspect-square bg-black flex items-center justify-center p-8 hover:bg-gray-900 transition-colors"
            >
              <Image
                src={brandUrl}
                alt="Brand logo"
                width={150}
                height={150}
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
            </motion.div>
          ))}
        </div>

        <motion.button
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hover:text-white/90 transition-colors cursor-pointer"
          onClick={() => scrollToSection(contactRef)}
        >
          <ChevronDown size={32} className="text-white/70" />
        </motion.button>
      </section>

      {/* Call to Action Section */}
      <section ref={contactRef} className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`${poppins.className} text-3xl md:text-5xl font-bold mb-8`}
          >
            <span className="text-stroke text-transparent">Let's Bring</span>{' '}
            Your Vision{' '}
            <span className="text-stroke text-transparent">to Life!</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
          >
            Ready to start your next project? Let's create something extraordinary together.
            Share your vision with us, and we'll help bring it to the screen.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-white text-black px-8 py-4 rounded-full hover:bg-gray-200 transition-colors font-bold"
          >
            Start Your Project
          </motion.button>
        </div>
      </section>
    </main>
  );
}