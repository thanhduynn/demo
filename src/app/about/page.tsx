"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <main className="relative w-full min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative w-full h-[80vh] flex items-center justify-center">
        <Image
          src="/images/branding/2-20231024053531-mda61.png"
          alt="Vantage Hero"
          layout="fill"
          objectFit="cover"
          className="opacity-60"
        />
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold text-center z-10"
        >
          Elevating Visual Storytelling
        </motion.h1>
      </div>

      {/* About Section */}
      <div className="container mx-auto px-6 py-16 text-center max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-lg md:text-xl font-light leading-relaxed"
        >
          BROS CINE is an video production company with offices in the Ho Chi Minh and equipment rental in Da Nang . With lots of ambition about TVC, documentary filming, music video. Having a love with every simple thing in this world. Always be professional & energetic at work.
        </motion.p>
      </div>

      {/* Gallery Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-10 max-w-6xl mx-auto">
        {["/images/branding/4-20231112070119-3tigy.png", "/images/branding/5-20231112070119-qulxm.png", "/images/branding/6-20231112070119-gmi7t.png"].map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            className="overflow-hidden rounded-lg"
          >
            <Image src={src} alt={`Gallery ${index + 1}`} width={500} height={300} className="object-cover" />
          </motion.div>
        ))}
      </div>
    </main>
  );
}
