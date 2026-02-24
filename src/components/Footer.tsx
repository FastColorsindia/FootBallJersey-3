import { useNavigate, useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const quickLinks = ['Home', 'Gallery', 'Infrastructure', 'Blog', 'About',];
  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Instagram, href: 'https://www.instagram.com/fastcolorsretail/' },
    { icon: Linkedin, href: '#' }
  ];

  const handleLinkClick = (link: string) => {
    const sectionId = link;

    // Special handling for Gallery to navigate to the separate page
    if (sectionId === 'Gallery') {
      navigate('/gallery');
      window.scrollTo(0, 0);
      return;
    }

    // Special handling for Blog to navigate to the separate blog list page
    if (sectionId === 'Blog') {
      navigate('/blog');
      window.scrollTo(0, 0);
      return;
    }

    // Special handling for Home to navigate to top
    if (sectionId === 'Home') {
      if (location.pathname !== '/') {
        navigate('/');
        window.scrollTo(0, 0);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    // For other sections
    const targetId = sectionId.toLowerCase();
    if (location.pathname !== '/') {
      navigate('/');
      // Delay scroll to allow navigation to complete
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          const navHeight = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navHeight;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        const navHeight = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navHeight;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-navy-dark text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">ST</span>
              </div>
              <span className="text-white font-bold text-lg">FastColors</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Premium sublimation printing for custom FootBall jerseys and apparel. Quality, speed, and excellence in every print.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-purple-600/20 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  >
                    <Icon className="hover:text-white" size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleLinkClick(link)}
                    className="hover:text-purple-400 transition-colors duration-300 text-left"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>



          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                <span>72, KNP Subramaniam Nagar Pudur, Pirivu, Dharapuram Road, Tiruppur, Tamil Nadu 641604</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-purple-400 flex-shrink-0" size={20} />
                <a href="tel:+917812865788" className="hover:text-purple-400 transition-colors">
                  +91 7812 865 788
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-purple-400 flex-shrink-0" size={20} />
                <a href="mailto:fastcolorsfashion@gmail.com" className="hover:text-purple-400 transition-colors">
                  fastcolorsfashion@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; 2026 Fastcolors. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
