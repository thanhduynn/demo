'use client';

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useWorkStore } from '~/stores/work.store';

const defaultProject = {
	id: '1',
	title: 'REALME C75 EVERYTHING PROOF',
	subtitle: 'Built to endure with IP69 dust and water resistance. Stay powered with 6000mAh massive battery. Smart at your fingertip with advanced AI features.',
	type: 'TVC',
	videoUrl: 'https://www.youtube.com/watch?v=6v2L2UGZJAM',
	brand: 'realme',
	productionCompany: 'Vantage Pictures',
	execusiveProducer: 'James Duong',
  director: ['Paul Moore', 'Zacharia Lorenz'],
};

export default function ProjectDetail({ params }:any) {
  const router = useRouter();
  const { getProjectById } = useWorkStore();
  const projectFromStore = getProjectById(params.id);

  const project = projectFromStore === undefined ? defaultProject : projectFromStore;

  return (
    <main className=" bg-black text-white mt-[20vh]">
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
            <iframe
              src="https://player.vimeo.com/video/1039746267"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen={false}
              
            />
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
              <p className="text-gray-300">{project.subtitle}</p>
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
                  <p className="font-medium">{project.execusiveProducer}</p>
                </div>
                
                <div>
                  <p className="text-gray-400">Director</p>
                  <p className="font-medium">{project.director.join(", ")}</p>
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