import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomeHero from './sections/HomeHero';
import Portfolio from './sections/Portfolio';
import About from './sections/About';
import Contact from './sections/Contact';

// Home Page Component
const HomePage = () => (
  <main className="w-full">
    <HomeHero />
    {/* Featured Works Preview */}
    <section className="w-full py-20 sm:py-28 lg:py-32 bg-white">
      <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 tracking-wider mb-4">
            精选作品
          </h2>
          <div className="w-12 h-px bg-gray-300 mx-auto mb-6" />
          <p className="text-gray-500 font-light max-w-md mx-auto">
            探索我镜头下的世界，感受光影的魅力
          </p>
        </div>

        {/* Featured Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            { src: './images/city/city1.jpg', title: '城市建筑' },
            { src: './images/wilderness/wild1.jpg', title: '旷野遐想' },
            { src: './images/architecture/arch1.jpg', title: '建筑光影' },
            { src: './images/life/life1.jpg', title: '生活碎片' },
          ].map((item, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] overflow-hidden group cursor-pointer"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-light tracking-wider">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="./portfolio"
            className="inline-block px-8 py-3 border border-gray-900 text-gray-900 font-light tracking-wider hover:bg-gray-900 hover:text-white transition-colors"
          >
            查看全部作品
          </a>
        </div>
      </div>
    </section>
  </main>
);

// Portfolio Page Component
const PortfolioPage = () => (
  <main className="w-full pt-20">
    <Portfolio />
  </main>
);

// About Page Component
const AboutPage = () => (
  <main className="w-full pt-20">
    <About />
  </main>
);

// Contact Page Component
const ContactPage = () => (
  <main className="w-full pt-20">
    <Contact />
  </main>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
