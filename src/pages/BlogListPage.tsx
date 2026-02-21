import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import WhatsAppIcon from '../components/WhatsAppIcon';

const articles = [
    {
        id: 'cricket-jersey-design-tips',
        title: 'Cricket Jersey Design Tips for Teams',
        date: 'Feb 1, 2026',
        excerpt: 'Essential tips for designing professional and eye-catching cricket jerseys for your team.',
        image: 'https://images.pexels.com/photos/1367192/pexels-photo-1367192.jpeg?auto=compress&cs=tinysrgb&w=800',
        readTime: '5 min read',
        author: 'Design Team',
    },
    {
        id: 'choose-perfect-cricket-jersey-colors',
        title: 'How to Choose Perfect Cricket Jersey Colors',
        date: 'Jan 28, 2026',
        excerpt: 'A guide to selecting colors and designs that represent your cricket team brand.',
        image: 'https://images.pexels.com/photos/3803517/pexels-photo-3803517.jpeg?auto=compress&cs=tinysrgb&w=800',
        readTime: '4 min read',
        author: 'Color Expert',
    },
    {
        id: 'maintaining-your-cricket-jerseys',
        title: 'Maintaining Your Cricket Jerseys',
        date: 'Jan 20, 2026',
        excerpt: 'Best practices for maintaining and caring for premium cricket jerseys.',
        image: 'https://images.pexels.com/photos/4239031/pexels-photo-4239031.jpeg?auto=compress&cs=tinysrgb&w=800',
        readTime: '3 min read',
        author: 'Maintenance Pro',
    },
];

const BlogListPage = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navigation />

            <main className="pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl sm:text-5xl font-bold text-navy-dark mb-4">Our Blog</h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Latest insights and tips on cricket jersey design and care
                        </p>
                    </div>

                    {/* Featured Article */}
                    <Link to={`/blog/${articles[0].id}`} className="block mb-12 group">
                        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 md:flex">
                            <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                                <img
                                    src={articles[0].image}
                                    alt={articles[0].title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-3">Featured Post</span>
                                <h2 className="text-2xl md:text-3xl font-bold text-navy-dark mb-4 group-hover:text-blue-600 transition-colors">
                                    {articles[0].title}
                                </h2>
                                <p className="text-gray-600 mb-6">{articles[0].excerpt}</p>
                                <div className="flex items-center gap-4 text-sm text-gray-500">
                                    <div className="flex items-center gap-1">
                                        <Calendar size={15} />
                                        <span>{articles[0].date}</span>
                                    </div>
                                    <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                                        {articles[0].readTime}
                                    </span>
                                </div>
                                <div className="mt-6 flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-4 transition-all">
                                    Read Article <ArrowRight size={18} />
                                </div>
                            </div>
                        </div>
                    </Link>

                    {/* Rest of Articles */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {articles.slice(1).map((article) => (
                            <Link key={article.id} to={`/blog/${article.id}`} className="group">
                                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                                    <div className="relative h-52 overflow-hidden">
                                        <img
                                            src={article.image}
                                            alt={article.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-6 flex flex-col flex-1">
                                        <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                                            <div className="flex items-center gap-1">
                                                <Calendar size={14} />
                                                <span>{article.date}</span>
                                            </div>
                                            <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                                                {article.readTime}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold text-navy-dark mb-3 group-hover:text-blue-600 transition-colors">
                                            {article.title}
                                        </h3>
                                        <p className="text-gray-600 mb-4 line-clamp-2 flex-1">{article.excerpt}</p>
                                        <div className="flex items-center gap-2 text-blue-600 font-semibold">
                                            Read More <ArrowRight size={16} />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
            <WhatsAppIcon />
        </div>
    );
};

export default BlogListPage;
