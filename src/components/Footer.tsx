import { Link } from 'react-router-dom';
import { Camera } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { path: '/', label: '首页' },
    { path: '/portfolio', label: '作品集' },
    { path: '/about', label: '关于我' },
    { path: '/contact', label: '联系方式' },
  ];

  return (
    <footer className="w-full bg-gray-900 text-white py-12 sm:py-16">
      <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-xl font-light tracking-wider mb-4"
              >
                <Camera className="w-5 h-5" />
                秋若雨<span className="text-xs align-top">。</span>
              </Link>
              <p className="text-gray-400 font-light text-sm leading-relaxed max-w-xs">
                用镜头捕捉世界的每一个瞬间，让光影讲述无声的故事。
              </p>
            </div>

            {/* Navigation */}
            <div className="md:col-span-1">
              <h4 className="text-sm font-medium tracking-wider mb-4 text-gray-300">
                导航
              </h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-gray-400 font-light text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-1">
              <h4 className="text-sm font-medium tracking-wider mb-4 text-gray-300">
                联系
              </h4>
              <div className="space-y-3 text-gray-400 font-light text-sm">
                <p>WeChat: qiuruoyu_photo</p>
                <p>QQ: 123456789</p>
                <p>Behance: qiuruoyu</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gray-800 mb-8" />

          {/* Bottom Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 font-light text-xs tracking-wider">
              &copy; {currentYear} 秋若雨. All rights reserved.
            </p>
            <p className="text-gray-600 font-light text-xs">
              风光摄影师 / 视觉艺术家
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
