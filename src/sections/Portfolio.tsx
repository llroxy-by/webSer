import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { XIcon } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  images: string[];
}

const projects: Project[] = [
  {
    id: 'city',
    title: '城市建筑',
    description:
      '在钢筋水泥的森林中寻找秩序与美感。这个系列记录了世界各地城市的建筑风貌，从摩天大楼的几何线条到老街区的历史痕迹，每一张照片都是城市故事的见证。',
    images: [
      '/images/city/city1.jpg',
      '/images/city/city2.jpg',
      '/images/city/city3.jpg',
      '/images/city/city4.jpg',
      '/images/city/city5.jpg',
      '/images/city/city6.jpg',
    ],
  },
  {
    id: 'wilderness',
    title: '旷野遐想',
    description:
      '远离城市的喧嚣，在大自然中寻找内心的宁静。从草原到雪山，从星空到湖泊，这个系列展现了自然界最纯粹的美，让人在壮阔中感受生命的渺小与伟大。',
    images: [
      '/images/wilderness/wild1.jpg',
      '/images/wilderness/wild2.jpg',
      '/images/wilderness/wild3.jpg',
      '/images/wilderness/wild4.jpg',
      '/images/wilderness/wild5.jpg',
      '/images/wilderness/wild6.jpg',
    ],
  },
  {
    id: 'architecture',
    title: '建筑光影',
    description:
      '光与影是建筑的灵魂。这个系列聚焦于建筑空间中的光线变化，探索自然光如何赋予建筑生命，以及人造空间中的光影如何影响我们的情绪与感知。',
    images: [
      '/images/architecture/arch1.jpg',
      '/images/architecture/arch2.jpg',
      '/images/architecture/arch3.jpg',
      '/images/architecture/arch4.jpg',
      '/images/architecture/arch5.jpg',
      '/images/architecture/arch6.jpg',
    ],
  },
  {
    id: 'life',
    title: '生活碎片',
    description:
      '生活中最动人的瞬间往往藏在平凡之中。这个系列捕捉日常生活中的美好时刻——一杯咖啡、一场雨后、一个微笑，用镜头记录那些容易被忽略的温暖。',
    images: [
      '/images/life/life1.jpg',
      '/images/life/life2.jpg',
      '/images/life/life3.jpg',
      '/images/life/life4.jpg',
      '/images/life/life5.jpg',
      '/images/life/life6.jpg',
    ],
  },
];

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeProject, setActiveProject] = useState<string | null>(null);

  return (
    <section className="w-full min-h-screen bg-white py-20 sm:py-28 lg:py-32">
      <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 tracking-wider mb-4">
            作品集
          </h2>
          <div className="w-12 h-px bg-gray-300 mx-auto" />
        </div>

        {/* Projects */}
        <div className="space-y-24 sm:space-y-32">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Description */}
              <div
                className={`${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}
              >
                <span className="text-xs font-medium text-gray-400 tracking-[0.2em] uppercase mb-4 block">
                  0{index + 1}
                </span>
                <h3 className="text-2xl sm:text-3xl font-light text-gray-900 tracking-wider mb-6">
                  {project.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed mb-8">
                  {project.description}
                </p>
                <button
                  onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
                  className="text-sm font-medium text-gray-900 tracking-wider border-b border-gray-900 pb-1 hover:opacity-70 transition-opacity"
                >
                  {activeProject === project.id ? '收起作品' : '查看作品'}
                </button>
              </div>

              {/* Featured Image */}
              <div
                className={`${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}
              >
                <div
                  className="relative aspect-[4/3] overflow-hidden cursor-pointer group"
                  onClick={() => setSelectedImage(project.images[0])}
                >
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
              </div>

              {/* Gallery Grid - Expandable */}
              {activeProject === project.id && (
                <div className="col-span-1 lg:col-span-2 mt-8">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
                    {project.images.slice(1).map((image, imgIndex) => (
                      <div
                        key={imgIndex}
                        className="relative aspect-[4/3] overflow-hidden cursor-pointer group"
                        onClick={() => setSelectedImage(image)}
                      >
                        <img
                          src={image}
                          alt={`${project.title} ${imgIndex + 2}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Image Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95 border-none">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 z-50 text-white/70 hover:text-white transition-colors"
          >
            <XIcon className="w-8 h-8" />
          </button>
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full h-full object-contain max-h-[90vh]"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Portfolio;
