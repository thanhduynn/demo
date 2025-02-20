'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Eye } from 'lucide-react';

const categories = [
  'Music Video',
  'Talkshow',
  'Documentary Film',
  'TVC',
  'Branding Film',
  'Event Video',
];

const projects: any = [
  {
    title: 'Project 1',
    category: 'Music Video',
    description: 'A cinematic music video exploring urban culture',
    thumbnail: '/path-to-thumbnail-1.jpg' // Replace with actual path
  },
  {
    title: 'Project 2',
    category: 'TVC',
    description: 'Commercial spot for leading lifestyle brand',
    thumbnail: '/path-to-thumbnail-2.jpg'
  },
  {
    title: 'Project 3',
    category: 'Branding Film',
    description: 'Corporate identity film showcasing company values',
    thumbnail: '/path-to-thumbnail-3.jpg'
  },
  {
    title: 'Project 4',
    category: 'Documentary Film',
    description: 'Cultural documentary exploring Vietnamese traditions',
    thumbnail: '/path-to-thumbnail-4.jpg'
  },
  {
    title: 'Project 5',
    category: 'Event Video',
    description: 'High-profile tech conference coverage',
    thumbnail: '/path-to-thumbnail-5.jpg'
  },
];

export default function Work() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [mounted, setMounted] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project:any) => project.category === selectedCategory);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-64 md:h-96 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-current/60 to-black" />
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-7xl font-bold text-center pt-16"
          >
            Our Work
          </motion.h1>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 py-16">
        {/* Category filters */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-6 py-3 rounded-full transition-all duration-300 ${selectedCategory === 'All'
                ? 'bg-white text-black scale-105'
                : 'bg-gray-900 hover:bg-gray-800'
              }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${selectedCategory === category
                  ? 'bg-white text-black scale-105'
                  : 'bg-gray-900 hover:bg-gray-800'
                }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project:any, index:any) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
                onHoverStart={() => setHoveredProject(project.title)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                <div className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Hover Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={hoveredProject === project.title ? { y: 0, opacity: 1 } : {}}
                      className="text-center p-6"
                    >
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-sm text-gray-300 mb-4">{project.description}</p>
                      <div className="flex gap-4 justify-center">
                        <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-colors">
                          <Play size={16} />
                          Play
                        </button>
                        <button className="flex items-center gap-2 bg-black/50 text-white px-4 py-2 rounded-full hover:bg-black/70 transition-colors">
                          <Eye size={16} />
                          Details
                        </button>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Category Tag */}
                <div className="absolute top-4 left-4 bg-black/70 text-white text-sm px-3 py-1 rounded-full">
                  {project.category}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </main>
  );
}
// 'use client';

// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Play, Eye, X } from 'lucide-react';
// import { useRouter } from 'next/navigation';

// const categories = [
//   'Music Video',
//   'Talkshow',
//   'Documentary Film',
//   'TVC',
//   'Branding Film',
//   'Event Video',
// ];

// const projects = [
//   {
//     id: 1,
//     title: 'Realme C75 - Everything Proof',
//     category: 'TVC',
//     description: 'Built to endure with IP69 dust and water resistance',
//     thumbnail: '/path-to-thumbnail-1.jpg',
//     videoUrl: 'https://player.vimeo.com/video/123456789', // Replace with actual video URL
//     brand: 'Realme',
//     productionCompany: 'Vantage Pictures',
//     director: 'Paul Moore',
//     producer: 'An Hoang',
//     dop: 'Kelvin Chew',
//   },
//   // ... add more projects with similar structure
// ];

// function VideoModal({ isOpen, onClose, project }:any) {
//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
//           onClick={onClose}
//         >
//           <motion.div
//             initial={{ scale: 0.9, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             exit={{ scale: 0.9, opacity: 0 }}
//             className="relative w-full max-w-4xl mx-4"
//             onClick={e => e.stopPropagation()}
//           >
//             <button
//               onClick={onClose}
//               className="absolute -top-12 right-0 text-white hover:text-gray-300"
//             >
//               <X size={24} />
//             </button>
//             <div className="relative pb-[56.25%] h-0">
//               <iframe
//                 src={project?.videoUrl}
//                 className="absolute top-0 left-0 w-full h-full rounded-lg"
//                 frameBorder="0"
//                 allow="autoplay; fullscreen; picture-in-picture"
//                 allowFullScreen
//               />
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }

// export default function Work() {
//   const router = useRouter();
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [mounted, setMounted] = useState(false);
//   const [hoveredProject, setHoveredProject] = useState(null);
//   const [selectedProject, setSelectedProject] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   const filteredProjects =
//     selectedCategory === 'All'
//       ? projects
//       : projects.filter(project => project.category === selectedCategory);

//   if (!mounted) return null;

//   const handlePlayClick = (project:any) => {
//     setSelectedProject(project);
//     setIsModalOpen(true);
//   };

//   const handleDetailClick = (projectId:any) => {
//     router.push(`/work/${projectId}`);
//   };

//   // ... rest of your existing JSX, but update the buttons section:

//   return (
//     <main className="min-h-screen bg-black text-white">
//       {/* ... existing hero section ... */}
      
//       {/* ... existing category filters ... */}

//       {/* Projects grid */}
//       <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         <AnimatePresence>
//           {filteredProjects.map((project:any, index) => (
//             <motion.div
//               key={project.id}
//               layout
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, scale: 0.9 }}
//               transition={{ delay: index * 0.1 }}
//               className="relative group"
//               onHoverStart={() => setHoveredProject(project.id)}
//               onHoverEnd={() => setHoveredProject(null)}
//             >
//               <div className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden">
//                 {/* ... existing gradient overlay ... */}

//                 <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
//                   <motion.div
//                     initial={{ y: 20, opacity: 0 }}
//                     animate={hoveredProject === project.id ? { y: 0, opacity: 1 } : {}}
//                     className="text-center p-6"
//                   >
//                     <h3 className="text-xl font-bold mb-2">{project.title}</h3>
//                     <p className="text-sm text-gray-300 mb-4">{project.description}</p>
//                     <div className="flex gap-4 justify-center">
//                       <button 
//                         onClick={() => handlePlayClick(project)}
//                         className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-colors"
//                       >
//                         <Play size={16} />
//                         Play
//                       </button>
//                       <button 
//                         onClick={() => handleDetailClick(project.id)}
//                         className="flex items-center gap-2 bg-black/50 text-white px-4 py-2 rounded-full hover:bg-black/70 transition-colors"
//                       >
//                         <Eye size={16} />
//                         Details
//                       </button>
//                     </div>
//                   </motion.div>
//                 </div>
//               </div>

//               <div className="absolute top-4 left-4 bg-black/70 text-white text-sm px-3 py-1 rounded-full">
//                 {project.category}
//               </div>
//             </motion.div>
//           ))}
//         </AnimatePresence>
//       </motion.div>

//       <VideoModal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         project={selectedProject}
//       />
//     </main>
//   );
// }