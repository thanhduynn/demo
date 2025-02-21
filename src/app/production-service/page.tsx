// export default function ProductionService() {
//   return <h1>Production-Service</h1>;
// }
"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProductionService() {
  return (
    <main className="w-full min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="w-full h-[80vh] flex items-center justify-center">
        <Image
          src="/images/branding/1-20231112070119-rzkuo.png"
          alt="Vietnam Production Service"
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
          Vietnam Production Service
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
          We offer world-class production services in Vietnam, providing seamless
          logistics, high-quality equipment, and expert crews to bring your
          vision to life. From commercial shoots to feature films, we ensure a
          smooth and efficient production experience.
        </motion.p>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-6 py-10 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {["Pre-production", "Shooting", "Casting", "Post-production", "Color grading", "Visual effects"].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-800 p-6 rounded-lg text-center"
            >
              <h3 className="text-xl font-semibold">{service}</h3>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Gallery Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-10 max-w-6xl mx-auto">
        {["/images/prod-ser/prepro.jpg", "/images/prod-ser/shooting.jpg", "/images/prod-ser/cast.png","/images/prod-ser/postpro.jpg", "/images/prod-ser/cl.png", "/images/prod-ser/vs.jpg"].map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            className="overflow-hidden rounded-lg"
          >
            <Image src={src} alt={`Service ${index + 1}`} width={500} height={300} className="object-cover" />
          </motion.div>
        ))}
      </div>

    </main>
  );
}
