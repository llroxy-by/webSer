import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const HomeHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
        {/* User can replace this div with an actual image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white/20 text-lg font-light tracking-widest">
            [ 风景摄影作品背景 ]
          </div>
        </div>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <div
          className={`transition-all duration-1000 ${
            isLoaded
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-wider mb-4">
            秋若雨<span className="text-2xl sm:text-3xl align-top">。</span>
          </h1>
        </div>

        <div
          className={`transition-all duration-1000 delay-300 ${
            isLoaded
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-lg sm:text-xl md:text-2xl font-light text-white/90 tracking-[0.3em] mb-12">
            风光摄影师
          </p>
        </div>

        <div
          className={`transition-all duration-1000 delay-500 ${
            isLoaded
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="w-16 h-px bg-white/50 mx-auto mb-8" />
          <p className="text-sm sm:text-base font-light text-white/70 tracking-wider max-w-md mx-auto leading-relaxed">
            用镜头捕捉世界的每一个瞬间
            <br />
            让光影讲述无声的故事
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToContent}
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-10 transition-all duration-1000 delay-700 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <ChevronDown className="w-8 h-8 text-white/70 animate-bounce" />
      </button>
    </section>
  );
};

export default HomeHero;
