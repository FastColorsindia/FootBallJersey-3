import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

const WhatWeDo = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLearnMore = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById('about');
        if (element) {
          const navHeight = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navHeight;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById('about');
      if (element) {
        const navHeight = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navHeight;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  };
  return (
    <section id="whatwedo" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">What We Do</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We specialize in designing and producing premium FootBall jerseys with precise workmanship, durable materials, and customized fits. Our FootBall jerseys combine your unique design with short delivery times, personalized service, and production standards you can trust.
          </p>
        </motion.div>

        <div className="mt-8 grid gap-6">
          <div className="grid md:grid-cols-3 gap-6 items-center">
            <img
              src="/Gallery1/JS34.jpg"
              alt="FootBall jersey design left"
              className="w-full h-60 object-cover rounded-lg hidden md:block"
            />

            <img
              src="/3.jpg"
              alt="Jersey production facility"
              className="w-full h-60 object-cover rounded-lg"
            />

            <img
              src="/1.png"
              alt="FootBall jersey design right"
              className="w-full h-60 object-cover rounded-lg hidden md:block"
            />
          </div>

          <div>
            <img
              src="/Gallery1/JSMAIN-1.jpg"
              alt="Premium FootBall jersey fabric"
              className="w-full h-70 md:h-64 object-cover rounded-lg"
            />
          </div>

          <div className="flex justify-center">
            <button
              onClick={handleLearnMore}
              className="px-6 py-3 bg-purple-700 text-white rounded-lg font-semibold shadow hover:bg-purple-800 transition"
            >
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
