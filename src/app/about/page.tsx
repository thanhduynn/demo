"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <main className="relative w-full min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative w-full h-[80vh] flex items-center justify-center">
        <Image
          src="/images/hero-background.jpg"
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
          We are a team of passionate filmmakers and creative visionaries, dedicated
          to crafting compelling narratives that captivate audiences. Our expertise
          lies in blending cinematic artistry with innovative storytelling techniques
          to bring ideas to life.
        </motion.p>
      </div>

      {/* Gallery Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-10 max-w-6xl mx-auto">
        {["/images/gallery1.jpg", "/images/gallery2.jpg", "/images/gallery3.jpg"].map((src, index) => (
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

      {/* Footer */}
      <div className="text-center py-10 text-gray-400">
        <p>© 2024 Vantage Pictures. All Rights Reserved.</p>
      </div>
    </main>
  );
}
