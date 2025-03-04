'use client';
import { Poppins } from 'next/font/google';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { database } from '../../firebase';
import { FIREBASE_BRANDS, FIREBASE_BROSCINE, FIREBASE_HIGHLIGHTS, FIREBASE_HOME } from '~/constants/firebase';
import Slide from '~/types/slide.type';
import useHomeStore from '~/stores/home.store';
import Brand from '~/types/brand.type';
import Head from 'next/head';

const Slideshow = dynamic(() => import('~/components/SlideShow/SlideShow'));
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700', '900'] });

const brandUrl = '/images/unilever.png';

export default function Home() {
  const featuredWorkRef = useRef(null);
  const brandsRef = useRef(null);
  const contactRef = useRef(null);

  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [imageUrl, setImageUrl] = useState("/images/branding/3-20231024053531-97qf7.png");

  const setHomeStore = useHomeStore(state => state.setHomeStore);
  const brands = useHomeStore(state => state.brands);

  const scrollToSection = (ref: any) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const fetchData = async () => {
    try {
      const heroRef = doc(database, FIREBASE_BROSCINE, FIREBASE_HOME);
      const highlightRef = collection(database, FIREBASE_BROSCINE, FIREBASE_HOME, FIREBASE_HIGHLIGHTS);
      const brandRef = collection(database, FIREBASE_BROSCINE, FIREBASE_HOME, FIREBASE_BRANDS);

      const [heroSnap, highlightSnap, brandSnap] = await Promise.all([
        getDoc(heroRef),
        getDocs(highlightRef),
        getDocs(brandRef),
      ]);

      if (heroSnap.exists()) {
        const data = heroSnap.data()['heroSection'];
        setTitle(data.title);
        setSubtitle(data.subtitle);
        setImageUrl(data.imageUrl);
      } else {
        console.error("No data found in the hero document!");
      }

      const highlightData = highlightSnap.docs.map(doc => doc.data()) as Slide[];
      const categoryData = brandSnap.docs.map(doc => doc.data()) as Brand[];

      setHomeStore('slides', highlightData);
      setHomeStore('brands', categoryData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Head>
        <meta name="google-site-verification" content="ouY_gOiaiAZfoGRg6m1Kqvm0qiC5Bh5e6HRwEKVXNUY" />
      </Head>
      <main className="min-h-screen bg-foreground text-white">
        {/* Hero Section */}
        <section className="relative h-screen">
          <Image
            src={imageUrl}
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
              {title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-lg md:text-xl text-center max-w-2xl text-gray-300"
            >
              {subtitle}
            </motion.p>

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
            <h2 className={`${poppins.className} text-3xl md:text-4xl font-bold`} >
              Some of <span className="text-background"> OURS HIGHLIGHT</span>
            </h2>
            <div className="h-1 w-20 bg-white mx-auto mt-2" />
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
            {brands.map((brand, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="aspect-square bg-black flex items-center justify-center p-8 hover:bg-gray-900 transition-colors"
              >
                <Image
                  src={brand.logoUrl}
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
    </>
  );
}