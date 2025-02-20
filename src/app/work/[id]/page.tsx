'use client';

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

// This would typically come from an API or database
const getProjectById = (id:any) => {
  // Mock data similar to the image
  return {
    title: 'REALME C75 EVERYTHING PROOF',
    description: 'Built to endure with IP69 dust and water resistance. Stay powered with 6000mAh massive battery. Smart at your fingertip with advanced AI features.',
    brand: 'realme',
    productionCompany: 'Vantage Pictures',
    executiveProducer: 'James Duong',
    director: 'Paul Moore, Zacharia Lorenz',
    producer: 'An Hoang, Ha Nguyen',
    // ... add all other crew members from the image
  };
};
export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' }
  ];
}
export default function ProjectDetail({ params }:any) {
  const router = useRouter();
  const project = getProjectById(params.id);

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => router.back()}
          className="flex items-center gap-2 text-white/70 hover:text-white mb-8"
        >
          <ArrowLeft size={20} />
          Back to Projects
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Video/Image Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="aspect-video bg-gray-800 rounded-lg overflow-hidden"
          >
            {/* Add video player or main image here */}
          </motion.div>

          {/* Project Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
              <p className="text-gray-300">{project.description}</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold mb-4">Credits</h2>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-400">Brand</p>
                  <p className="font-medium">{project.brand}</p>
                </div>
                
                <div>
                  <p className="text-gray-400">Production Company</p>
                  <p className="font-medium">{project.productionCompany}</p>
                </div>
                
                <div>
                  <p className="text-gray-400">Executive Producer</p>
                  <p className="font-medium">{project.executiveProducer}</p>
                </div>
                
                <div>
                  <p className="text-gray-400">Director</p>
                  <p className="font-medium">{project.director}</p>
                </div>
                
                {/* Add more crew information */}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}