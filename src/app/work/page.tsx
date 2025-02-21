'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Eye, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { AutoPlayer } from '~/components/AutoPlayer/AutoPlayer';

const categories = [
  'Music Video',
  'Talkshow',
  'Documentary Film',
  'TVC',
  'Branding Film',
  'Event Video',
];

const projects = [
  {
    title: 'Hustlang Robber - Say Wazzup (Official MV)',
    category: 'Music Video',
    description: 'Music video chính thức của Hustlang Robber với tựa đề "Say Wazzup".',
    thumbnail: '/path-to-thumbnail-1.jpg',
    url: 'https://www.youtube.com/embed/22UvDL238i0'
  },
  {
    title: 'Dưới Ánh Đèn Sân Khấu | Thu Minh Cover',
    category: 'Music Video',
    description: 'Bản cover "Dưới Ánh Đèn Sân Khấu" do ca sĩ Thu Minh thể hiện.',
    thumbnail: '/path-to-thumbnail-2.jpg',
    url: 'https://www.youtube.com/embed/sm3XlDdo5hQ'
  },
  {
    title: 'VAN LANG UNIVERSITY: WHERE IMPACT MATTERS',
    category: 'Branding Film',
    description: 'Phim thương hiệu giới thiệu về Đại học Văn Lang và những giá trị cốt lõi.',
    thumbnail: '/path-to-thumbnail-3.jpg',
    url: 'https://www.youtube.com/embed/DJhS895ambk'
  },
  {
    title: 'BÁO CÁO TÀI CHÍNH QUÝ 3/2023',
    category: 'Talkshow',
    description: 'Chương trình phân tích tài chính quý 3 năm 2023.',
    thumbnail: '/path-to-thumbnail-4.jpg',
    url: 'https://www.youtube.com/embed/Vw1ctGttkIs'
  },
  {
    title: 'Hành trình về miền Tây - Văn hóa và ẩm thực',
    category: 'Documentary Film',
    description: 'Phim tài liệu về văn hóa và ẩm thực miền Tây Việt Nam.',
    thumbnail: '/path-to-thumbnail-5.jpg',
    url: 'https://www.youtube.com/embed/NHO4kkFYOsY'
  },
  {
    title: 'Sự kiện Tech Expo 2024',
    category: 'Event Video',
    description: 'Video tổng hợp sự kiện Tech Expo 2024 với các công nghệ mới nhất.',
    thumbnail: '/path-to-thumbnail-6.jpg',
    url: 'https://www.youtube.com/embed/0GU-OLONGb0'
  },
  {
    title: 'TVC Quảng cáo sản phẩm chăm sóc da',
    category: 'TVC',
    description: 'Quảng cáo truyền hình về sản phẩm chăm sóc da cao cấp.',
    thumbnail: '/path-to-thumbnail-7.jpg',
    url: 'https://www.youtube.com/embed/JSr-5wsyYJg'
  },
  {
    title: 'Phóng sự: Nghề làm nước mắm truyền thống',
    category: 'Documentary Film',
    description: 'Phóng sự về làng nghề làm nước mắm truyền thống tại Phan Thiết.',
    thumbnail: '/path-to-thumbnail-8.jpg',
    url: 'https://www.youtube.com/embed/kSrCxE_m660'
  },
  {
    title: 'Tech Talk: Xu hướng AI năm 2025',
    category: 'Talkshow',
    description: 'Buổi thảo luận về xu hướng trí tuệ nhân tạo trong năm 2025.',
    thumbnail: '/path-to-thumbnail-9.jpg',
    url: 'https://www.youtube.com/embed/OtrOrQcfq8o'
  },
  {
    title: 'Sự kiện ra mắt sản phẩm mới của VinFast',
    category: 'Event Video',
    description: 'Video tổng hợp sự kiện ra mắt mẫu xe điện mới của VinFast.',
    thumbnail: '/path-to-thumbnail-10.jpg',
    url: 'https://www.youtube.com/embed/t41UzZgJDY8'
  },
  {
    title: 'Video giới thiệu thương hiệu Highland Coffee',
    category: 'Branding Film',
    description: 'Phim giới thiệu thương hiệu và hành trình phát triển của Highland Coffee.',
    thumbnail: '/path-to-thumbnail-11.jpg',
    url: 'https://www.youtube.com/embed/rCIWjkFuOiQ'
  },
  {
    title: 'MV Nhạc trẻ mới nhất 2024',
    category: 'Music Video',
    description: 'Music video mới nhất của nghệ sĩ nổi tiếng năm 2024.',
    thumbnail: '/path-to-thumbnail-12.jpg',
    url: 'https://www.youtube.com/embed/rCIWjkFuOiQ'
  },
  {
    title: 'Video quảng cáo nước giải khát mới',
    category: 'TVC',
    description: 'TVC quảng cáo sản phẩm nước giải khát mới trên thị trường.',
    thumbnail: '/path-to-thumbnail-13.jpg',
    url: 'https://www.youtube.com/embed/EWXQ9v4t4mE'
  },
  {
    title: 'Phim tài liệu: Di sản văn hóa Huế',
    category: 'Documentary Film',
    description: 'Bộ phim tài liệu về những di sản văn hóa lâu đời tại Huế.',
    thumbnail: '/path-to-thumbnail-14.jpg',
    url: 'https://www.youtube.com/embed/VJqXo33RFYk'
  }
];

function VideoModal({ isOpen, onClose, project }: any) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-4xl mx-4"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute -top-12 right-0 text-white hover:text-gray-300"
            >
              <X size={24} />
            </button>
            <div className="relative pb-[56.25%] h-0">
              <iframe
                src={project?.url}
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Work() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [mounted, setMounted] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project: any) => project.category === selectedCategory);

  if (!mounted) return null;

  const handlePlayClick = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleDetailClick = (projectId: any) => {
    router.push(`/work/${projectId}`);
  };

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
            {filteredProjects.map((project: any, index: any) => (
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
                  {/* <iframe
                      src={project.url}
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      allowFullScreen={false}

                    /> */}
                  <AutoPlayer
                    url={project.url}
                  ></AutoPlayer>
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">

                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={hoveredProject === project.title ? { y: 0, opacity: 1 } : {}}
                      className="text-center p-6"
                    >
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-sm text-gray-300 mb-4">{project.description}</p>
                      <div className="flex gap-4 justify-center">
                        <button
                          onClick={() => handlePlayClick(project)}
                          className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-colors"
                        >
                          <Play size={16} />
                          Play
                        </button>
                        <button
                          onClick={() => handleDetailClick(project.id)}
                          className="flex items-center gap-2 bg-black/50 text-white px-4 py-2 rounded-full hover:bg-black/70 transition-colors"
                        >
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
      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={selectedProject}
      />
    </main>
  );
}