import { useEffect, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('about-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about-section"
      className="w-full min-h-screen bg-gray-50 py-20 sm:py-28 lg:py-32"
    >
      <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 tracking-wider mb-4">
            关于我
          </h2>
          <div className="w-12 h-px bg-gray-300 mx-auto" />
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Portrait */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0 overflow-hidden">
              <img
                src="/images/portrait/profile.jpg"
                alt="秋若雨"
                className="w-full h-full object-cover"
              />
              {/* Subtle frame effect */}
              <div className="absolute inset-4 border border-white/30 pointer-events-none" />
            </div>
          </div>

          {/* Bio */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-light text-gray-900 tracking-wider mb-2">
                  秋若雨
                </h3>
                <p className="text-gray-500 font-light tracking-wider">
                  风光摄影师 / 视觉艺术家
                </p>
              </div>

              <div className="w-16 h-px bg-gray-300" />

              <div className="space-y-4 text-gray-600 font-light leading-relaxed">
                <p>
                  我是一名热爱探索世界的风光摄影师，相信每一个地方都有它独特的故事等待被发现。从繁华都市的霓虹灯光到荒野深处的星空银河，我用镜头记录下那些令人屏息的瞬间。
                </p>
                <p>
                  摄影对我而言，不仅是技术的展现，更是一种与世界对话的方式。我追求在画面中捕捉光影的诗意，在构图里寻找几何的韵律，让每一张照片都能唤起观者内心深处的共鸣。
                </p>
                <p>
                  多年来，我的足迹遍布世界各地，从亚洲的古老城市到欧洲的浪漫小镇，从非洲的广袤草原到南美的神秘雨林。每一次旅行都是一次新的探索，每一次按下快门都是一次与美的邂逅。
                </p>
                <p>
                  我希望通过我的作品，能够让更多人看到这个世界的美好，感受到自然的壮丽与生命的温度。摄影让我学会了用心观察，用情感受，用爱记录。
                </p>
              </div>

              <div className="pt-4">
                <div className="flex flex-wrap gap-3">
                  {['风光摄影', '城市建筑', '人文纪实', '旅行探索'].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 bg-white border border-gray-200 text-sm text-gray-600 font-light tracking-wider"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
